document.addEventListener('DOMContentLoaded', () => {
    // ===== DOM ELEMENTS =====
    const themeToggle   = document.getElementById('themeToggle');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar       = document.getElementById('sidebar');
    const sidebarOverlay= document.getElementById('sidebarOverlay');
    const sidebarNav    = document.getElementById('sidebarNav');
    const bookContent   = document.getElementById('book-content');
    const progressFill  = document.getElementById('progressFill');
    const scrollProgress= document.getElementById('scrollProgress');
    const backToTop     = document.getElementById('backToTop');
    const body          = document.body;

    // ===== THEME =====
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        updateIcon(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.className = 'dark';
        updateIcon('dark');
    } else {
        body.className = 'light';
        updateIcon('light');
    }

    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark');
        const newTheme = isDark ? 'light' : 'dark';
        body.className = newTheme;
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
        themeToggle.style.transform = 'scale(0.85)';
        setTimeout(() => themeToggle.style.transform = '', 150);
    });

    function updateIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'ph ph-sun';
        } else {
            icon.className = 'ph ph-moon';
        }
    }

    // ===== SIDEBAR MOBILE TOGGLE =====
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
    });

    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
    });

    // ===== RENDER BOOK CONTENT & NAVIGATION =====
    function initBook() {
        let navHTML = '';
        let contentHTML = '';

        window.bookData.chapters.forEach((ch, i) => {
            // Build Sidebar Nav
            navHTML += `
            <div class="nav-chapter" id="nav-${ch.id}">
                <button class="nav-chapter-title" onclick="toggleChapter('${ch.id}')" data-target="${ch.id}">
                    <span class="ch-num">${ch.num}.</span> ${ch.title}
                </button>
                <div class="nav-subs">
                    ${ch.subsections.map(sub => `
                        <a href="#${sub.id}" class="nav-sub-link" onclick="closeSidebarMobile()">${sub.title}</a>
                    `).join('')}
                </div>
            </div>
            `;
            // Accumulate HTML content
            contentHTML += ch.content;
        });

        // Insert DOM
        sidebarNav.innerHTML = navHTML;
        bookContent.innerHTML = contentHTML;

        // Trigger MathJax re-render for dynamically added content
        if (window.MathJax) {
            MathJax.typesetPromise([bookContent]).catch((err) => console.log('MathJax error: ', err.message));
        }

        setupScrollSpy();
        setupAnimations();
    }

    // Initialize Book Data
    if (window.bookData && window.bookData.chapters) {
        initBook();
    }

    // ===== NAVIGATION LOGIC =====
    window.toggleChapter = function(chId) {
        // Toggle the expanded class
        const chapter = document.getElementById('nav-' + chId);
        
        // Collapse others (accordion style)
        document.querySelectorAll('.nav-chapter').forEach(el => {
            if(el !== chapter) el.classList.remove('expanded');
        });

        chapter.classList.toggle('expanded');
        
        // Scroll to the actual chapter in main content
        const targetSection = document.getElementById(chId);
        if(targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    window.closeSidebarMobile = function() {
        if (window.innerWidth <= 900) {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
        }
    };

    // ===== SCROLL SPY & PROGRESS =====
    function setupScrollSpy() {
        const sections = document.querySelectorAll('.chapter-section');
        const navLinks = document.querySelectorAll('.nav-chapter-title');

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            
            // Top Read Progress
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            scrollProgress.style.width = scrollPercent + '%';
            progressFill.style.width = scrollPercent + '%'; // Sidebar progress

            // Back to top button
            if (scrollTop > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }

            // Highlight Active Chapter in Sidebar
            let current = '';
            sections.forEach(sec => {
                const sectionTop = sec.offsetTop;
                const sectionHeight = sec.clientHeight;
                if (scrollY >= (sectionTop - 150)) {
                    current = sec.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-target') === current) {
                    link.classList.add('active');
                    // Ensure the active chapter nav is expanded
                    link.parentElement.classList.add('expanded');
                }
            });
        });
    }

    // ===== BACK TO TOP =====
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== CARD ENTRANCE ANIMATION =====
    function setupAnimations() {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach((card) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) rotate(-1.5deg)';
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    
                    // Slightly random delay based on position relative to viewport
                    const delay = Math.random() * 200 + 50; 

                    setTimeout(() => {
                        card.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                        card.style.opacity = '1';
                        
                        // Fake random rotation between -0.4 and 0.4 deg for natural look
                        const rot = (Math.random() * 0.8) - 0.4;
                        card.style.transform = `translateY(0) rotate(${rot}deg)`;

                        // Re-apply correct hover state transition after entrance
                        setTimeout(() => {
                            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
                        }, 600);
                    }, delay);

                    observer.unobserve(card);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        cards.forEach((card) => observer.observe(card));
    }
});
