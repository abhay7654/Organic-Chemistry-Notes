window.bookData = {
    chapters: [
        {
            id: 'ch1',
            num: 1,
            title: 'IUPAC Nomenclature',
            icon: 'ph-text-aa',
            color: 'green',
            subsections: [
                { id: 'ch1-sec1', title: 'Basic Rules' },
                { id: 'ch1-sec2', title: 'Functional Groups' },
                { id: 'ch1-sec3', title: 'Polyfunctional Compounds' },
                { id: 'ch1-sec4', title: 'Bicyclo & Spiro Compounds' }
            ],
            content: `
            <div class="chapter-section" id="ch1">
                <div class="chapter-title">
                    <span class="ch-icon">📚</span> Chapter 1: IUPAC Nomenclature
                </div>
                
                <div class="chapter-cards">
                    <!-- Intro -->
                    <div class="card" id="ch1-sec1">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle green"><i class="ph ph-text-aa"></i></div>
                            <h3>1.1 Basic Rules (The Core Formula)</h3>
                        </div>
                        <div class="formula-box">
                            Secondary Prefix + Primary Prefix + Word Root + Primary Suffix + Secondary Suffix
                        </div>
                        <ul class="feature-list">
                            <li><span class="bullet">1.</span> <strong>Word Root:</strong> Longest carbon chain (Meth, Eth, Prop, But, Pent...)</li>
                            <li><span class="bullet">2.</span> <strong>Primary Suffix:</strong> Nature of C-C bond (ane, ene, yne)</li>
                            <li><span class="bullet">3.</span> <strong>Secondary Suffix:</strong> Principal functional group</li>
                            <li><span class="bullet">4.</span> <strong>Primary Prefix:</strong> Cyclo/Bicyclo/Spiro (if any)</li>
                            <li><span class="bullet">5.</span> <strong>Secondary Prefix:</strong> Substituents (fluoro, chloro, methyl, etc.)</li>
                        </ul>
                        <div class="page-curl"></div>
                    </div>

                    <!-- Functional Groups Priority -->
                    <div class="card priority-card" id="ch1-sec2">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle red"><i class="ph ph-sort-descending"></i></div>
                            <h3>1.2 Priority Order of Functional Groups <span class="badge">CRUCIAL</span></h3>
                        </div>
                        <p>When multiple functional groups are present, one acts as the <strong>Principal Functional Group (Baahubali)</strong> and dictates the suffix. The rest act as substituents (prefixes).</p>
                        <div class="priority-flow">
                            \\( -COOH > -SO_3H > -COOR > -COX > -CONH_2 > -CN > -NC > -CHO > -CO- > -OH > -SH > -NH_2 > C=C > C\\equiv C \\)
                        </div>
                        
                        <table class="notebook-table">
                            <tr>
                                <th>Group</th>
                                <th>Prefix (if substituent)</th>
                                <th>Suffix (if principal)</th>
                            </tr>
                            <tr>
                                <td>-COOH (Carboxylic acid)</td>
                                <td>Carboxy</td>
                                <td>-oic acid / carboxylic acid</td>
                            </tr>
                            <tr>
                                <td>-COOR (Ester)</td>
                                <td>Alkoxy carbonyl</td>
                                <td>-oate / carboxylate</td>
                            </tr>
                            <tr>
                                <td>-CHO (Aldehyde)</td>
                                <td>Formyl / Oxo</td>
                                <td>-al / carbaldehyde</td>
                            </tr>
                            <tr>
                                <td>-CO- (Ketone)</td>
                                <td>Oxo / Keto</td>
                                <td>-one</td>
                            </tr>
                            <tr>
                                <td>-OH (Alcohol)</td>
                                <td>Hydroxy</td>
                                <td>-ol</td>
                            </tr>
                            <tr>
                                <td>-NH2 (Amine)</td>
                                <td>Amino</td>
                                <td>-amine</td>
                            </tr>
                        </table>
                        
                        <div class="trap-box">
                            🚨 Formyl vs Oxo for Aldehydes: If CHO carbon is counted in parent chain → Oxo. If not counted → Formyl.
                        </div>
                        <div class="page-curl"></div>
                    </div>

                    <!-- Complex Cases -->
                    <div class="card" id="ch1-sec3">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle blue"><i class="ph ph-git-branch"></i></div>
                            <h3>1.3 Polyfunctional & Complex Substituents</h3>
                        </div>
                        <ul class="check-list">
                            <li><span class="check-mark">✓</span> Numbering priority: Principal FG > Multiple Bond > Substituent</li>
                            <li><span class="check-mark">✓</span> If Principal FG is directly attached to ring: use special suffix (e.g., Cyclohexane<strong>carboxylic acid</strong>, NOT Cyclohexyl methanoic acid)</li>
                            <li><span class="check-mark">✓</span> Complex substituent naming: Numbering starts from the carbon directly attached to main chain. Written in brackets.</li>
                        </ul>
                        <div class="example-box">
                            <span class="label blue">Example</span>
                            <span>5-(1,2-Dimethylpropyl)nonane</span>
                        </div>
                        <div class="page-curl"></div>
                    </div>
                </div>
            </div>
            `
        },
        {
            id: 'ch2',
            num: 2,
            title: 'General Organic Chemistry',
            icon: 'ph-lightning',
            color: 'orange',
            subsections: [
                { id: 'ch2-sec1', title: 'Electronic Effects' },
                { id: 'ch2-sec2', title: 'Inductive Effect' },
                { id: 'ch2-sec3', title: 'Resonance & Mesomeric' },
                { id: 'ch2-sec4', title: 'Hyperconjugation' },
                { id: 'ch2-sec5', title: 'Intermediate Stability' },
                { id: 'ch2-sec6', title: 'Acidic & Basic Strength' }
            ],
            content: `
            <div class="chapter-section" id="ch2">
                <div class="chapter-title">
                    <span class="ch-icon">⚡</span> Chapter 2: GOC (General Organic Chemistry)
                </div>
                
                <div class="chapter-cards">
                    
                    <!-- Overview -->
                    <div class="card" id="ch2-sec1">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle purple"><i class="ph ph-atom"></i></div>
                            <h3>2.1 Electronic Displacement Effects</h3>
                        </div>
                        <p>The core of organic chemistry mechanisms.</p>
                        <div class="comparison-grid">
                            <div class="comp-box">
                                <span class="label purple">Permanent Effects</span>
                                <ul class="feature-list" style="text-align:left;width:100%">
                                    <li><span class="bullet">•</span> Inductive Effect (I)</li>
                                    <li><span class="bullet">•</span> Mesomeric/Resonance (M/R)</li>
                                    <li><span class="bullet">•</span> Hyperconjugation (H)</li>
                                </ul>
                            </div>
                            <div class="comp-box">
                                <span class="label orange">Temporary Effects</span>
                                <ul class="feature-list" style="text-align:left;width:100%">
                                    <li><span class="bullet">•</span> Electromeric Effect (E)</li>
                                    <li><span class="bullet">•</span> Inductomeric Effect</li>
                                </ul>
                            </div>
                        </div>
                        <div class="page-curl"></div>
                    </div>

                    <!-- Inductive Effect -->
                    <div class="card" id="ch2-sec2">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle blue"><i class="ph ph-magnet"></i></div>
                            <h3>2.2 Inductive Effect (-I & +I)</h3>
                        </div>
                        <p>Polarization of $\\sigma$ bonds due to electronegativity difference. Acts purely through sigma bonds.</p>
                        <ul class="feature-list">
                            <li><span class="bullet">★</span> Distance dependent (negligible after 3rd carbon)</li>
                            <li><span class="bullet">★</span> Permanent, weak effect</li>
                        </ul>
                        
                        <div class="highlight-box variant">
                            <strong>-I Order (Electron Withdrawing):</strong><br>
                            \\( -NF_3^+ > -NO_2 > -CN > -SO_3H > -CHO > -CO- > -COOH > -F > -Cl > -Br > -I > -OR > -OH > -C\\equiv CH > -NH_2 > -C_6H_5 > -CH=CH_2 > -H \\)
                        </div>
                        
                        <div class="highlight-box">
                            <strong>+I Order (Electron Donating):</strong><br>
                            \\( -CH_2^- > -NH^- > -O^- > -COO^- > (CH_3)_3C- > (CH_3)_2CH- > -CH_2CH_3 > -CH_3 > -D > -H \\)
                        </div>
                        <div class="page-curl"></div>
                    </div>
                    
                    <!-- Resonance/Mesomeric -->
                    <div class="card" id="ch2-sec3">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle red"><i class="ph ph-waves"></i></div>
                            <h3>2.3 Resonance & Mesomeric Effect</h3>
                        </div>
                        <p>Delocalization of $\\pi$ electrons. Most dominant permanent effect.</p>
                        <div class="highlight-box variant">
                            <span class="label blue">+M Order (Donors)</span>
                            \\( -O^- > -NH_2 > -NHR > -NR_2 > -OH > -OR > -NHCOCH_3 > -OCOCH_3 > -X \\) (Halogens)
                        </div>
                        <div class="highlight-box">
                            <span class="label orange">-M Order (Withdrawers)</span>
                            \\( -NO_2 > -CN > -SO_3H > -CHO > -CO- > -COOH > -COOR > -CONH_2 \\)
                        </div>
                        <div class="warning-box">
                            <span class="warn-icon">📝</span>
                            <div>
                                <strong>Halogen Exception:</strong> Halogens are +M but -I. Because of very strong electronegativity, their <strong>overall effect is electron withdrawing (-I dominates over +M)</strong>, making them deactivating but ortho/para directing.
                            </div>
                        </div>
                        <div class="page-curl"></div>
                    </div>

                    <!-- Stability -->
                    <div class="card" id="ch2-sec5">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle green"><i class="ph ph-shield-check"></i></div>
                            <h3>2.5 Intermediates Stability <span class="badge">V. IMP</span></h3>
                        </div>
                        
                        <div class="note-box">
                            <strong>General Rule of Thumb for Impact:</strong><br>
                            Aromaticity (Anti-aromaticity) > Mesomeric (+M/-M) > Resonance > Hyperconjugation > Inductive (+I/-I)
                        </div>
                        
                        <table class="notebook-table">
                            <tr>
                                <th>Intermediate</th>
                                <th>Stabilized By</th>
                                <th>Destabilized By</th>
                            </tr>
                            <tr>
                                <td><strong>Carbocation ($C^+$)</strong></td>
                                <td>+M, +R, +H, +I</td>
                                <td>-M, -R, -I</td>
                            </tr>
                            <tr>
                                <td><strong>Carbanion ($C^-$)</strong></td>
                                <td>-M, -R, -I</td>
                                <td>+M, +R, +H, +I</td>
                            </tr>
                            <tr>
                                <td><strong>Free Radical ($C^\\bullet$)</strong></td>
                                <td>+M, +R, +H, +I</td>
                                <td>-I</td>
                            </tr>
                        </table>
                        
                        <div class="example-box">
                            <span class="label green">Order</span>
                            \\( 3^\\circ > 2^\\circ > 1^\\circ \\) for Carbocations & Radicals <br>
                            \\( 1^\\circ > 2^\\circ > 3^\\circ \\) for Carbanions
                        </div>
                        <div class="page-curl"></div>
                    </div>
                </div>
            </div>
            `
        },
        {
            id: 'ch3',
            num: 3,
            title: 'Isomerism',
            icon: 'ph-graph',
            color: 'purple',
            subsections: [
                { id: 'ch3-sec1', title: 'Structural Isomerism' },
                { id: 'ch3-sec2', title: 'Geometrical Isomerism' },
                { id: 'ch3-sec3', title: 'Optical Isomerism' },
                { id: 'ch3-sec4', title: 'Conformational Isomerism' }
            ],
            content: `
            <div class="chapter-section" id="ch3">
                <div class="chapter-title">
                    <span class="ch-icon">🧊</span> Chapter 3: Isomerism
                </div>
                
                <div class="chapter-cards">
                    <!-- Structural Isomerism -->
                    <div class="card" id="ch3-sec1">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle purple"><i class="ph ph-git-branch"></i></div>
                            <h3>3.1 Structural (Constitutional) Isomerism</h3>
                        </div>
                        <ul class="feature-list">
                            <li><span class="bullet">1.</span> <strong>Chain:</strong> Difference in carbon skeleton (e.g. n-butane vs isobutane).</li>
                            <li><span class="bullet">2.</span> <strong>Position:</strong> Difference in position of substituent/FG/multiple bond (e.g. 1-propanol vs 2-propanol).</li>
                            <li><span class="bullet">3.</span> <strong>Functional:</strong> Same formula, different functional group. (e.g. Alcohols & Ethers, Aldehydes & Ketones).</li>
                            <li><span class="bullet">4.</span> <strong>Metamerism:</strong> Different alkyl chains on either side of a polyvalent functional group (like -O-, -S-, -NH-).</li>
                            <li><span class="bullet">5.</span> <strong>Tautomerism:</strong> Dynamic equilibrium between two structural isomers (Keto-enol is most important).</li>
                        </ul>
                        <div class="highlight-box variant">
                            <strong>Keto-Enol Stability Rule:</strong> Normally Keto > Enol (by 99%). But Enol is favored if it gains <strong>aromaticity</strong> (e.g., phenol) or <strong>extended extended conjugation / intramolecular H-bonding</strong> (like in acetylacetone).
                        </div>
                        <div class="page-curl"></div>
                    </div>

                    <!-- Geometrical Isomerism -->
                    <div class="card priority-card" id="ch3-sec2">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle green"><i class="ph ph-columns"></i></div>
                            <h3>3.2 Geometrical (Cis-Trans / E-Z) Isomerism</h3>
                        </div>
                        <p>Arises due to <strong>restricted rotation</strong> (around C=C, C=N, N=N, or cycloalkanes).</p>
                        <div class="note-box">
                            <strong>E-Z Nomenclature (CIP Priority Rules):</strong><br>
                            If high priority groups are on the <strong>same</strong> side $\\rightarrow$ Z (Zusammen).<br>
                            If on <strong>opposite</strong> sides $\\rightarrow$ E (Entgegen).<br>
                            Priority is decided by Atomic Number.
                        </div>
                        <table class="notebook-table">
                            <tr>
                                <th>Property</th>
                                <th>Cis Isomer</th>
                                <th>Trans Isomer</th>
                            </tr>
                            <tr>
                                <td>Dipole Moment ($\\mu$)</td>
                                <td>Usually higher</td>
                                <td>Usually lower (can be 0)</td>
                            </tr>
                            <tr>
                                <td>Boiling Point</td>
                                <td>Higher (stronger dipole-dipole)</td>
                                <td>Lower</td>
                            </tr>
                            <tr>
                                <td>Melting Point</td>
                                <td>Lower</td>
                                <td>Higher (packs better in lattice)</td>
                            </tr>
                        </table>
                        <div class="page-curl"></div>
                    </div>
                    
                    <!-- Optical Isomerism -->
                    <div class="card" id="ch3-sec3">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle blue"><i class="ph ph-spinner"></i></div>
                            <h3>3.3 Optical Isomerism</h3>
                        </div>
                        <p>Non-superimposable mirror images are <strong>Enantiomers</strong>. Must lack a plane of symmetry (POS) and center of symmetry (COS).</p>
                        <ul class="check-list">
                            <li><span class="check-mark">✓</span> <strong>Chiral Carbon ($\\star$):</strong> Carbon attached to 4 different groups.</li>
                            <li><span class="check-mark">✓</span> <strong>Meso Compound:</strong> Has chiral centers but is optically inactive due to internal compensation (has POS).</li>
                            <li><span class="check-mark">✓</span> <strong>Diastereomers:</strong> Stereoisomers that are NOT mirror images. They have different physical properties.</li>
                            <li><span class="check-mark">✓</span> <strong>Racemic Mixture:</strong> 50:50 mixture of enantiomers. Optically inactive (external compensation).</li>
                        </ul>
                        <div class="formula-box">
                            Number of stereoisomers (unsymmetrical molecule) = \\( 2^n \\) <br>
                            <small>where n = number of stereocenters</small>
                        </div>
                        <div class="page-curl"></div>
                    </div>
                </div>
            </div>
            `
        },
        {
            id: 'ch4',
            num: 4,
            title: 'Hydrocarbons',
            icon: 'ph-flame',
            color: 'orange',
            subsections: [
                { id: 'ch4-sec1', title: 'Alkanes (Preparation & Rxns)' },
                { id: 'ch4-sec2', title: 'Alkenes (Addition Rxns)' },
                { id: 'ch4-sec3', title: 'Alkynes' },
                { id: 'ch4-sec4', title: 'Aromatic Hydrocarbons' }
            ],
            content: `
            <div class="chapter-section" id="ch4">
                <div class="chapter-title">
                    <span class="ch-icon">🔥</span> Chapter 4: Hydrocarbons
                </div>
                
                <div class="chapter-cards">
                    <!-- Alkanes -->
                    <div class="card" id="ch4-sec1">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle orange"><i class="ph ph-line-segments"></i></div>
                            <h3>4.1 Alkanes</h3>
                        </div>
                        <p>Saturated. React mainly via <strong>Free Radical Substitution</strong>.</p>
                        <div class="highlight-box">
                            <strong>Wurtz Reaction:</strong> \\( 2R-X + 2Na \\xrightarrow{\text{dry ether}} R-R + 2NaX \\) <br>
                            (Ascent of series, best for symmetrical alkanes, fails for methane).
                        </div>
                        <div class="highlight-box variant">
                            <strong>Kolbe's Electrolysis:</strong> \\( 2R-COOK + 2H_2O \\xrightarrow{\text{electrolysis}} R-R + 2CO_2 + H_2 + 2KOH \\) <br>
                            (R-R and CO2 at Anode, H2 at Cathode).
                        </div>
                        <ul class="feature-list">
                            <li><span class="bullet">★</span> <strong>Halogenation (Radical):</strong> Order of reactivity: $F_2 > Cl_2 > Br_2 > I_2$.</li>
                            <li><span class="bullet">★</span> Iodination is reversible. Carried out in presence of oxidants like $HIO_3$ or $HNO_3$.</li>
                        </ul>
                        <div class="page-curl"></div>
                    </div>

                    <!-- Alkenes -->
                    <div class="card priority-card" id="ch4-sec2">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle red"><i class="ph ph-link"></i></div>
                            <h3>4.2 Alkenes & Addition Reactions <span class="badge">V. IMP</span></h3>
                        </div>
                        <p>Unsaturated. Characteristic reaction: <strong>Electrophilic Addition</strong>.</p>
                        
                        <div class="reaction-chain">
                            <strong>Markovnikov's Rule:</strong> The negative part of the addendum goes to the carbon with FEWER hydrogens.<br>
                            <strong>Anti-Markovnikov (Kharasch / Peroxide effect):</strong> Only works for <strong>HBr</strong> in presence of peroxides. Free radical mechanism.
                        </div>
                        
                        <table class="notebook-table">
                            <tr>
                                <th>Reagent</th>
                                <th>Product Name</th>
                                <th>Mechanism / Stereochemistry</th>
                            </tr>
                            <tr>
                                <td>HX</td>
                                <td>Alkyl halide</td>
                                <td>Markovnikov, carbocation intermediate (rearrangement possible)</td>
                            </tr>
                            <tr>
                                <td>$H_2O / H^+$</td>
                                <td>Alcohol</td>
                                <td>Markovnikov (rearrangement possible)</td>
                            </tr>
                            <tr>
                                <td>$B_2H_6 / H_2O_2, OH^-$</td>
                                <td>Alcohol</td>
                                <td>Anti-Markovnikov (Hydroboration-Oxidation), Syn addition</td>
                            </tr>
                            <tr>
                                <td>$Hg(OAc)_2 / NaBH_4$</td>
                                <td>Alcohol</td>
                                <td>Markovnikov without rearrangement (Oxymercuration-Demercuration)</td>
                            </tr>
                            <tr>
                                <td>$Br_2 / CCl_4$</td>
                                <td>Vicinal dibromide</td>
                                <td>Anti addition. Decolorizes bromine water (test for unsaturation).</td>
                            </tr>
                            <tr>
                                <td>Cold dilute $KMnO_4$</td>
                                <td>Vicinal diol</td>
                                <td>Baeyer's Reagent. Syn addition. Pink color discharges.</td>
                            </tr>
                            <tr>
                                <td>Ozonolysis ($O_3, Zn/H_2O$)</td>
                                <td>Aldehydes/Ketones</td>
                                <td>Cleaves C=C completely. (Reductive ozonolysis).</td>
                            </tr>
                        </table>
                        <div class="trap-box">
                            🚨 Carbocation rearrangements (Hydride/Alkyl shifts) ONLY happen in direct addition like HX or H2O/H+. They DO NOT happen in Oxymercuration or Hydroboration.
                        </div>
                        <div class="page-curl"></div>
                    </div>

                    <!-- Alkynes -->
                    <div class="card" id="ch4-sec3">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle purple"><i class="ph ph-arrows-out-line-horizontal"></i></div>
                            <h3>4.3 Alkynes</h3>
                        </div>
                        <div class="example-box">
                            Terminal alkynes are acidic because sp-carbon is 50% s-character (highly electronegative). They react with Na metal and Tollen's reagent.
                        </div>
                        <ul class="check-list">
                            <li><span class="check-mark">✓</span> <strong>Lindlar's Catalyst ($Pd / CaCO_3 / Quinoline$):</strong> Alkyne $\\rightarrow$ Cis-alkene.</li>
                            <li><span class="check-mark">✓</span> <strong>Birch Reduction ($Na / liq. NH_3$):</strong> Alkyne $\\rightarrow$ Trans-alkene.</li>
                            <li><span class="check-mark">✓</span> <strong>Hydration (Kucherov's reaction):</strong> Uses $1\\% HgSO_4 / dil. H_2SO_4$. Follows Markovnikov rule and tautomerizes to ketone.</li>
                        </ul>
                        <div class="page-curl"></div>
                    </div>
                    
                    <!-- Benzene -->
                    <div class="card" id="ch4-sec4">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle green"><i class="ph ph-hexagon"></i></div>
                            <h3>4.4 Aromatic Hydrocarbons (Benzene)</h3>
                        </div>
                        <p>Characteristic reaction: <strong>Electrophilic Aromatic Substitution (EAS)</strong>.</p>
                        <ul class="feature-list">
                            <li><span class="bullet">1.</span> <strong>Nitration:</strong> $HNO_3 + H_2SO_4$ $\\rightarrow$ Generates NO2+.</li>
                            <li><span class="bullet">2.</span> <strong>Halogenation:</strong> $Cl_2 + FeCl_3$ $\\rightarrow$ Generates Cl+.</li>
                            <li><span class="bullet">3.</span> <strong>Friedel-Crafts Alkylation:</strong> $R-X + AlCl_3$ $\\rightarrow$ Generates R+. (Caution: polyalkylation and rearrangement happen).</li>
                            <li><span class="bullet">4.</span> <strong>Friedel-Crafts Acylation:</strong> $R-COCl + AlCl_3$ $\\rightarrow$ Generates Acylium ion ($R-C\\equiv O^+$). No rearrangement, stops at monoacylation.</li>
                        </ul>
                        <div class="page-curl"></div>
                    </div>
                </div>
            </div>
            `
        },
        {
            id: 'ch5',
            num: 5,
            title: 'Haloalkanes & Haloarenes',
            icon: 'ph-flask',
            color: 'blue',
            subsections: [
                { id: 'ch5-sec1', title: 'Preparation' },
                { id: 'ch5-sec2', title: 'SN1 and SN2' },
                { id: 'ch5-sec3', title: 'Elimination (E1 & E2)' },
                { id: 'ch5-sec4', title: 'Organometallics (Grignard)' }
            ],
            content: `
            <div class="chapter-section" id="ch5">
                <div class="chapter-title">
                    <span class="ch-icon">🧪</span> Chapter 5: Haloalkanes
                </div>
                
                <div class="chapter-cards">
                    <!-- Prep -->
                    <div class="card" id="ch5-sec1">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle blue"><i class="ph ph-test-tube"></i></div>
                            <h3>5.1 Key Preparation Methods</h3>
                        </div>
                        <ul class="feature-list">
                            <li><span class="bullet">★</span> <strong>Darzen's Process:</strong> $R-OH + SOCl_2 \\xrightarrow{Pyridine} R-Cl + SO_2\\uparrow + HCl\\uparrow$. (Best method for R-Cl because byproducts are gases).</li>
                            <li><span class="bullet">★</span> <strong>Finkelstein Rxn:</strong> $R-X + NaI \\xrightarrow{Dry acetone} R-I + NaX\\downarrow$. (Halogen exchange, driven by precipitation of NaCl/NaBr).</li>
                            <li><span class="bullet">★</span> <strong>Swarts Rxn:</strong> Synthesis of Alkyl fluorides using heavy metal fluorides ($AgF, Hg_2F_2, CoF_3$).</li>
                        </ul>
                        <div class="page-curl"></div>
                    </div>

                    <!-- SN1 SN2 -->
                    <div class="card priority-card" id="ch5-sec2">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle red"><i class="ph ph-arrows-left-right"></i></div>
                            <h3>5.2 Nucleophilic Substitution: SN1 vs SN2 <span class="badge">CRUCIAL</span></h3>
                        </div>
                        <div class="comparison-grid">
                            <div class="comp-box">
                                <span class="label blue">SN1 (Unimolecular)</span>
                                <strong>Rate = k[R-X]</strong>
                                <ul style="text-align:left; font-size:0.9rem; list-style:none;">
                                    <li>- 2-step process (Carbocation is formed).</li>
                                    <li>- Order of reactivity: <strong>$3^\\circ > 2^\\circ > 1^\\circ$</strong></li>
                                    <li>- Rearrangement is possible.</li>
                                    <li>- Yields <strong>Racemic Mixture</strong> (retention + inversion).</li>
                                    <li>- Favored by Polar Protic solvents ($H_2O, EtOH$).</li>
                                    <li>- Favored by Weak Nucleophiles.</li>
                                </ul>
                            </div>
                            <div class="comp-box">
                                <span class="label orange">SN2 (Bimolecular)</span>
                                <strong>Rate = k[R-X][Nu-]</strong>
                                <ul style="text-align:left; font-size:0.9rem; list-style:none;">
                                    <li>- 1-step concerted process (Transition state).</li>
                                    <li>- Order of reactivity: <strong>$1^\\circ > 2^\\circ > 3^\\circ$</strong> (steric hindrance rules).</li>
                                    <li>- NO rearrangement.</li>
                                    <li>- Complete <strong>Inversion of Configuration</strong> (Walden inversion).</li>
                                    <li>- Favored by Polar Aprotic solvents (DMSO, DMF).</li>
                                    <li>- Favored by Strong Nucleophiles.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="warning-box">
                            <span class="warn-icon">📝</span>
                            <span>Strong nucleophiles ($CN^-, OH^-, RS^-$) favor SN2. Weak nucleophiles ($H_2O, ROH$) favor SN1. Note: Ambient nucleophiles like $CN^-$ vs $AgCN$ $\\rightarrow$ NaCN gives Nitriles (R-CN), AgCN gives Isonitriles (R-NC).</span>
                        </div>
                        <div class="page-curl"></div>
                    </div>
                </div>
            </div>
            `
        },
        {
            id: 'ch6',
            num: 6,
            title: 'Alcohols, Phenols, Ethers',
            icon: 'ph-drop',
            color: 'green',
            subsections: [
                { id: 'ch6-sec1', title: 'Alcohols: Prep & Rxns' },
                { id: 'ch6-sec2', title: 'Phenols (Acidic Nature)' },
                { id: 'ch6-sec3', title: 'Ethers (Cleavage)' }
            ],
            content: `
            <div class="chapter-section" id="ch6">
                <div class="chapter-title">
                    <span class="ch-icon">💧</span> Chapter 6: Alcohols, Phenols & Ethers
                </div>
                
                <div class="chapter-cards">
                    <!-- Alcohols -->
                    <div class="card priority-card" id="ch6-sec1">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle green"><i class="ph ph-brand-npm"></i></div>
                            <h3>6.1 Alcohols ($R-OH$)</h3>
                        </div>
                        <ul class="feature-list">
                            <li><span class="bullet">★</span> <strong>Oxidation:</strong> $1^\\circ \\rightarrow$ Aldehyde $\\rightarrow$ Acid. $2^\\circ \\rightarrow$ Ketone. $3^\\circ$ resists oxidation.</li>
                            <li><span class="bullet">★</span> Mild Oxidants ($PCC, \text{Collin\\'s Reagent}$): Stop $1^\\circ$ alcohol at Aldehyde.</li>
                            <li><span class="bullet">★</span> Strong Oxidants ($KMnO_4, K_2Cr_2O_7$): Take $1^\\circ$ alcohol all the way to Acid.</li>
                        </ul>
                        <div class="highlight-box variant">
                            <strong>Lucas Test (Conc. $HCl + ZnCl_2$):</strong> Used to distinguish $1^\\circ, 2^\\circ, 3^\\circ$ alcohols.<br>
                            $3^\\circ \\rightarrow$ Immediate turbidity. $2^\\circ \\rightarrow$ Turbidity in 5 mins. $1^\\circ \\rightarrow$ No turbidity at room temp.
                        </div>
                        <div class="highlight-box">
                            <strong>Esterification:</strong> $R-OH + R'-COOH \\rightleftharpoons R'-COOR + H_2O$. (Acid catalyzed, reversible. Removes water to shift forward).
                        </div>
                        <div class="page-curl"></div>
                    </div>

                    <!-- Phenol -->
                    <div class="card" id="ch6-sec2">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle red"><i class="ph ph-hexagon"></i></div>
                            <h3>6.2 Phenols ($Ph-OH$)</h3>
                        </div>
                        <p>More acidic than alcohols because phenoxide ion is resonance stabilized.</p>
                        <table class="notebook-table">
                            <tr>
                                <th>Name Reaction</th>
                                <th>Reagents</th>
                                <th>Product</th>
                            </tr>
                            <tr>
                                <td><strong>Kolbe\\'s Rxn</strong></td>
                                <td>$NaOH, CO_2, H^+$</td>
                                <td>Salicylic Acid (ortho-Hydroxybenzoic acid)</td>
                            </tr>
                            <tr>
                                <td><strong>Reimer-Tiemann</strong></td>
                                <td>$CHCl_3 + NaOH$</td>
                                <td>Salicylaldehyde (ortho-Hydroxybenzaldehyde)</td>
                            </tr>
                        </table>
                        <div class="trap-box">
                            🚨 Phenol is ortho/para directing and highly activating. Bromine water gives a white ppt of 2,4,6-tribromophenol instantly.
                        </div>
                        <div class="page-curl"></div>
                    </div>
                    
                    <!-- Ethers -->
                    <div class="card" id="ch6-sec3">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle blue"><i class="ph ph-link-break"></i></div>
                            <h3>6.3 Ethers ($R-O-R'$)</h3>
                        </div>
                        <p>Most important reaction is <strong>Cleavage by HI</strong>.</p>
                        <div class="example-box">
                            <strong>Mechanism rules for $R-O-R\\' + HI$:</strong><br>
                            1. If both are $1^\\circ$ or $2^\\circ$: SN2 mechanism. Halide attacks the <strong>smaller/less sterically hindered</strong> alkyl group.<br>
                            2. If one is $3^\\circ$, benzyl, or allyl: SN1 mechanism. Halide attacks the group that forms the <strong>most stable carbocation</strong>.
                        </div>
                        <ul class="check-list">
                            <li><span class="check-mark">✓</span> <strong>Williamson Synthesis:</strong> $R-O^-Na^+ + R'-X \\rightarrow R-O-R' + NaX$. (Best when R\\' is $1^\\circ$. If R\\' is $3^\\circ$, elimination dominates!).</li>
                        </ul>
                        <div class="page-curl"></div>
                    </div>
                </div>
            </div>
            `
        },
        {
            id: 'ch7',
            num: 7,
            title: 'Aldehydes, Ketones & Acids',
            icon: 'ph-scales',
            color: 'orange',
            subsections: [
                { id: 'ch7-sec1', title: 'Aldehydes & Ketones (NAM)' },
                { id: 'ch7-sec2', title: 'Aldol & Cannizzaro' },
                { id: 'ch7-sec3', title: 'Carboxylic Acids' },
                { id: 'ch7-sec4', title: 'Acid Derivatives' }
            ],
            content: `
            <div class="chapter-section" id="ch7">
                <div class="chapter-title">
                    <span class="ch-icon">⚖️</span> Chapter 7: Aldehydes, Ketones & Acids
                </div>
                
                <div class="chapter-cards">
                    <!-- Intro -->
                    <div class="card" id="ch7-sec1">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle orange"><i class="ph ph-magnet"></i></div>
                            <h3>7.1 Nucleophilic Addition to Carbonyls</h3>
                        </div>
                        <p>Carbonyl carbon is electrophilic. Reactivity order: Formaldehyde > other Aldehydes > Ketones (due to sterics and +I effect of alkyl groups).</p>
                        <table class="notebook-table">
                            <tr>
                                <th>Reagent</th>
                                <th>Product Name</th>
                                <th>Notes</th>
                            </tr>
                            <tr>
                                <td>$HCN$</td>
                                <td>Cyanohydrin</td>
                                <td>Base catalyzed to generate $CN^-$</td>
                            </tr>
                            <tr>
                                <td>$NaHSO_3$</td>
                                <td>Bisulfite Adduct</td>
                                <td>White crystalline ppt (Purification method)</td>
                            </tr>
                            <tr>
                                <td>$NH_2OH$</td>
                                <td>Oxime</td>
                                <td>Needs weak acid catalyst (pH ~3.5)</td>
                            </tr>
                            <tr>
                                <td>$NH_2NH_2$</td>
                                <td>Hydrazone</td>
                                <td>Forms basis for Wolff-Kishner reduction</td>
                            </tr>
                            <tr>
                                <td>2,4-DNP</td>
                                <td>2,4-DNP derivative</td>
                                <td>Brady\\'s Reagent. Yellow/Orange/Red ppt (Test for Carbonyl)</td>
                            </tr>
                        </table>
                        <div class="page-curl"></div>
                    </div>

                    <!-- Aldol Cannizzaro -->
                    <div class="card priority-card" id="ch7-sec2">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle red"><i class="ph ph-arrows-merge"></i></div>
                            <h3>7.2 Key Name Reactions (Aldol vs Cannizzaro)</h3>
                        </div>
                        <div class="comparison-grid">
                            <div class="comp-box">
                                <span class="label green">Aldol Condensation</span>
                                <strong>Condition:</strong> Must have $\\alpha$-Hydrogen.
                                <ul style="text-align:left; font-size:0.9rem; list-style:none;">
                                    <li>- Reagent: <strong>Dilute</strong> base ($NaOH, Ba(OH)_2$).</li>
                                    <li>- Product: $\\beta$-hydroxy aldehyde/ketone.</li>
                                    <li>- On heating: loses water to form $\\alpha,\\beta$-unsaturated carbonyl compound.</li>
                                    <li>- Examples: Acetaldehyde, Acetone.</li>
                                </ul>
                            </div>
                            <div class="comp-box">
                                <span class="label blue">Cannizzaro Reaction</span>
                                <strong>Condition:</strong> NO $\\alpha$-Hydrogen.
                                <ul style="text-align:left; font-size:0.9rem; list-style:none;">
                                    <li>- Reagent: <strong>Concentrated</strong> base ($50\\% NaOH$).</li>
                                    <li>- Mechanism: Disproportionation (Self Redox).</li>
                                    <li>- Product: One molecule is oxidized to Acid salt, other is reduced to Alcohol.</li>
                                    <li>- Examples: Formaldehyde, Benzaldehyde.</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="highlight-box variant">
                            <strong>Iodoform Test ($I_2 + NaOH$):</strong> Positive for compounds containing $CH_3-CO-$ group OR $CH_3-CH(OH)-$ group. Gives yellow ppt of $CHI_3$.
                        </div>
                        <div class="page-curl"></div>
                    </div>

                    <!-- Acids -->
                    <div class="card" id="ch7-sec3">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle purple"><i class="ph ph-flask"></i></div>
                            <h3>7.3 Carboxylic Acids</h3>
                        </div>
                        <ul class="feature-list">
                            <li><span class="bullet">★</span> Acidity depends on Inductive effect. EWG (-I) increases acidity; EDG (+I) decreases acidity.</li>
                            <li><span class="bullet">★</span> $HCOOH > CH_3COOH > CH_3CH_2COOH$</li>
                            <li><span class="bullet">★</span> <strong>HVZ Reaction (Hell-Volhard-Zelinsky):</strong> $R-CH_2-COOH \\xrightarrow{X_2/Red P} R-CH(X)-COOH$. (Halogenation at $\\alpha$-carbon).</li>
                        </ul>
                        <div class="page-curl"></div>
                    </div>
                </div>
            </div>
            `
        },
        {
            id: 'ch8',
            num: 8,
            title: 'Amines',
            icon: 'ph-atom',
            color: 'blue',
            subsections: [
                { id: 'ch8-sec1', title: 'Basic Character' },
                { id: 'ch8-sec2', title: 'Gabriel & Hoffmann' },
                { id: 'ch8-sec3', title: 'Diazonium Salts' }
            ],
            content: `
            <div class="chapter-section" id="ch8">
                <div class="chapter-title">
                    <span class="ch-icon">🧬</span> Chapter 8: Amines
                </div>
                
                <div class="chapter-cards">
                    <!-- Basicity -->
                    <div class="card priority-card" id="ch8-sec1">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle blue"><i class="ph ph-thermometer-hot"></i></div>
                            <h3>8.1 Basic Strength of Amines <span class="badge">V. IMP</span></h3>
                        </div>
                        <p>Basicity depends on availability of lone pair on Nitrogen.</p>
                        <div class="note-box">
                            <strong>In Gaseous Phase / Non-polar solvent:</strong> Strictly follows +I effect.<br>
                            $3^\\circ > 2^\\circ > 1^\\circ > NH_3$
                        </div>
                        <div class="highlight-box variant">
                            <strong>In Aqueous Phase:</strong> Depends on +I effect AND H-bonding (solvation) AND steric hindrance.<br>
                            For Methyl amines ($R = CH_3$): <strong>$2^\\circ > 1^\\circ > 3^\\circ > NH_3$</strong> (213 rule)<br>
                            For Ethyl amines ($R = C_2H_5$): <strong>$2^\\circ > 3^\\circ > 1^\\circ > NH_3$</strong> (231 rule)
                        </div>
                        <div class="trap-box">
                            Aniline is MUCH less basic than alkylamines because the lone pair is delocalized into the benzene ring via resonance.
                        </div>
                        <div class="page-curl"></div>
                    </div>

                    <!-- Prep -->
                    <div class="card" id="ch8-sec2">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle orange"><i class="ph ph-paperclip"></i></div>
                            <h3>8.2 Key Preparation & Name Reactions</h3>
                        </div>
                        <ul class="feature-list">
                            <li><span class="bullet">1.</span> <strong>Gabriel Phthalimide Synthesis:</strong> Used to prepare <strong>only primary aliphatic amines</strong>. Doesn\\'t work for aniline (aryl halides don\\'t undergo SN2).</li>
                            <li><span class="bullet">2.</span> <strong>Hoffmann Bromamide Degradation:</strong> Amide $\\xrightarrow{Br_2/NaOH}$ $1^\\circ$ Amine. <strong>(Step-down reaction: product has 1 less carbon)</strong>.</li>
                            <li><span class="bullet">3.</span> <strong>Carbylamine Reaction (Isocyanide Test):</strong> Only for $1^\\circ$ amines (aliphatic & aromatic). $R-NH_2 + CHCl_3 + 3KOH \\rightarrow R-NC$ (foul smell).</li>
                        </ul>
                        <div class="page-curl"></div>
                    </div>
                </div>
            </div>
            `
        },
        {
            id: 'ch9',
            num: 9,
            title: 'Biomolecules & Polymers',
            icon: 'ph-dna',
            color: 'green',
            subsections: [
                { id: 'ch9-sec1', title: 'Carbohydrates' },
                { id: 'ch9-sec2', title: 'Proteins & Amino Acids' },
                { id: 'ch9-sec3', title: 'Polymers' }
            ],
            content: `
            <div class="chapter-section" id="ch9">
                <div class="chapter-title">
                    <span class="ch-icon">🧬</span> Chapter 9: Biomolecules & Polymers
                </div>
                
                <div class="chapter-cards">
                    <!-- Carbs -->
                    <div class="card priority-card" id="ch9-sec1">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle green"><i class="ph ph-hexagon"></i></div>
                            <h3>9.1 Carbohydrates (Sugars)</h3>
                        </div>
                        <ul class="feature-list">
                            <li><span class="bullet">★</span> <strong>Glucose (Aldohexose):</strong> Reducing sugar. Forms osazone with excess phenylhydrazine.</li>
                            <li><span class="bullet">★</span> <strong>Fructose (Ketohexose):</strong> Also a reducing sugar (due to enolization in basic medium like Tollens/Fehlings).</li>
                            <li><span class="bullet">★</span> <strong>Sucrose (Non-reducing):</strong> Glucose ($\\alpha$-1,2) Fructose. Invert sugar.</li>
                            <li><span class="bullet">★</span> <strong>Starch:</strong> Amylose (water-soluble, linear $\\alpha$-1,4) + Amylopectin (water-insoluble, branched $\\alpha$-1,6).</li>
                        </ul>
                        <div class="trap-box">
                            All monosaccharides and most disaccharides are reducing sugars. Sucrose is the major exception because both anomeric carbons are tied up in the glycosidic bond.
                        </div>
                        <div class="page-curl"></div>
                    </div>

                    <!-- Proteins -->
                    <div class="card" id="ch9-sec2">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle blue"><i class="ph ph-circles-three"></i></div>
                            <h3>9.2 Proteins & Amino Acids</h3>
                        </div>
                        <div class="highlight-box variant">
                            <strong>Zwitterion:</strong> At physiological pH, amino acids exist as dipolar ions. <br>
                            <strong>Isoelectric Point (pI):</strong> The pH at which the net charge is zero. Amino acid doesn\\'t move in an electric field.
                        </div>
                        <table class="notebook-table">
                            <tr>
                                <th>Protein Structure</th>
                                <th>Determined by</th>
                            </tr>
                            <tr>
                                <td>Primary ($1^\\circ$)</td>
                                <td>Peptide bonds (Sequence of AAs)</td>
                            </tr>
                            <tr>
                                <td>Secondary ($2^\\circ$)</td>
                                <td>Hydrogen bonds ($\\alpha$-helix, $\\beta$-pleated sheet)</td>
                            </tr>
                            <tr>
                                <td>Tertiary ($3^\\circ$)</td>
                                <td>Disulfide, H-bonds, Van der Waals, Ionic (Overall 3D folding)</td>
                            </tr>
                        </table>
                        <div class="page-curl"></div>
                    </div>
                    
                    <!-- Polymers -->
                    <div class="card" id="ch9-sec3">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle orange"><i class="ph ph-brackets-curly"></i></div>
                            <h3>9.3 Polymers</h3>
                        </div>
                        <div class="comparison-grid">
                            <div class="comp-box">
                                <span class="label green">Addition Polymers</span>
                                <ul style="text-align:left; font-size:0.9rem; list-style:none;">
                                    <li>- Polythene (Ethene)</li>
                                    <li>- Teflon (Tetrafluoroethene)</li>
                                    <li>- PVC (Vinyl chloride)</li>
                                    <li>- PAN (Acrylonitrile)</li>
                                </ul>
                            </div>
                            <div class="comp-box">
                                <span class="label blue">Condensation</span>
                                <ul style="text-align:left; font-size:0.9rem; list-style:none;">
                                    <li>- Nylon-6,6 (Hexamethylenediamine + Adipic acid)</li>
                                    <li>- Terylene/Dacron (Ethylene glycol + Terephthalic acid)</li>
                                    <li>- Bakelite (Phenol + Formaldehyde)</li>
                                </ul>
                            </div>
                        </div>
                        <div class="page-curl"></div>
                    </div>
                </div>
            </div>
            `
        },
        {
            id: 'ch10',
            num: 10,
            title: 'Practical Organic Chemistry',
            icon: 'ph-flask',
            color: 'purple',
            subsections: [
                { id: 'ch10-sec1', title: 'Detection of Elements' },
                { id: 'ch10-sec2', title: 'Quantitative Analysis' }
            ],
            content: `
            <div class="chapter-section" id="ch10">
                <div class="chapter-title">
                    <span class="ch-icon">🧪</span> Chapter 10: POC (Practical Organic Chemistry)
                </div>
                
                <div class="chapter-cards">
                    <!-- Lassaigne -->
                    <div class="card priority-card" id="ch10-sec1">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle purple"><i class="ph ph-test-tube"></i></div>
                            <h3>10.1 Detection of Elements (Lassaigne\\'s Test)</h3>
                        </div>
                        <p>Organic compound fused with Na metal to convert covalent compounds to ionic Na-salts.</p>
                        <table class="notebook-table">
                            <tr>
                                <th>Element</th>
                                <th>Reagents</th>
                                <th>Observation</th>
                                <th>Compound Formed</th>
                            </tr>
                            <tr>
                                <td>Nitrogen (N)</td>
                                <td>$FeSO_4 + H_2SO_4$</td>
                                <td>Prussian Blue ppt</td>
                                <td>$Fe_4[Fe(CN)_6]_3$</td>
                            </tr>
                            <tr>
                                <td>Sulfur (S)</td>
                                <td>Sodium nitroprusside</td>
                                <td>Violet color</td>
                                <td>$Na_4[Fe(CN)_5NOS]$</td>
                            </tr>
                            <tr>
                                <td>Halogens (X)</td>
                                <td>$AgNO_3 / HNO_3$</td>
                                <td>Cl: White, Br: Pale Yellow, I: Yellow</td>
                                <td>$AgCl, AgBr, AgI$</td>
                            </tr>
                        </table>
                        <div class="page-curl"></div>
                    </div>

                    <!-- Quantitative -->
                    <div class="card" id="ch10-sec2">
                        <div class="tape"></div>
                        <div class="card-header">
                            <div class="icon-circle orange"><i class="ph ph-scales"></i></div>
                            <h3>10.2 Quantitative Analysis <span class="badge">FORMULAS</span></h3>
                        </div>
                        <ul class="feature-list">
                            <li><span class="bullet">★</span> <strong>Duma\\'s Method (Nitrogen):</strong> $\\% N = \\frac{28 \\times V}{22400 \\times w} \\times 100$</li>
                            <li><span class="bullet">★</span> <strong>Kjeldahl\\'s Method (Nitrogen):</strong> $\\% N = \\frac{1.4 \\times M \\times 2 \\times (V_1 - V_2/2)}{w}$. Doesn\\'t work for nitro, azo, or rings (like Pyridine).</li>
                            <li><span class="bullet">★</span> <strong>Carius Method (Halogens):</strong> $\\% X = \\frac{\\text{Atomic mass of X} \\times m_1}{\\text{Molar mass of AgX} \\times w} \\times 100$</li>
                        </ul>
                        <div class="page-curl"></div>
                    </div>
                </div>
            </div>
            `
        }
    ]
};
