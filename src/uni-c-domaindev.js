import { domainKey, functionKey, levelKey, sectorKey } from "./uniHelpers/mapper";

class uniDomainDev extends HTMLElement {
    constructor() {
        super() 
        this.shadow = this.attachShadow({ mode: 'open' });
        this.dgTotal = 500;
        this.domainKey = domainKey;
        this.functionKey = functionKey;
        this.levelKey = levelKey;
        this.sectorKey = sectorKey;

        this.lordHealth = this.shadowRoot.getElementById('lordHealth');
        this.domainHealth = this.shadowRoot.getElementById('domainHealth');
        this.domainStrength = this.shadowRoot.getElementById('domainStrength');
        this.lordStrength = this.shadowRoot.getElementById('lordStrength');
        this.domainEndurance = this.shadowRoot.getElementById('domainEndurance');
        this.lordEndurance = this.shadowRoot.getElementById('lordEndurance');
        this.domainCharisma = this.shadowRoot.getElementById('domainCharisma');
        this.lordCharisma = this.shadowRoot.getElementById('lordCharisma');
        this.domainSight = this.shadowRoot.getElementById('domainSight');
        this.lordSight = this.shadowRoot.getElementById('lordSight');
        this.domainSpeed = this.shadowRoot.getElementById('domainSpeed');
        this.lordSpeed = this.shadowRoot.getElementById('lordSpeed');
        this.domainVisibility = this.shadowRoot.getElementById('domainVisibility');
        this.lordVisibility = this.shadowRoot.getElementById('lordVisibility');

        this.domainSetup = true;

        this.lordHealthTotal = 0;
        this.domainHealthTotal = 0;
        this.domainStrengthTotal = 0;
        this.lordStrengthTotal = 0;
        this.domainEnduranceTotal = 0;
        this.lordEnduranceTotal = 0;
        this.domainCharismaTotal = 0;
        this.lordCharismaTotal = 0;
        this.domainSightTotal = 0;
        this.lordSightTotal = 0;
        this.domainSpeedTotal = 0;
        // +3 Speed for Lord because of GelCase
        this.lordSpeedTotal = 3;
        this.domainVisibilityTotal = 0;
        this.lordVisibilityTotal = 0;

        this.goldGel = 0;
        this.blueGel = 0;
        this.redGel = 0;
        this.whiteGel = 0;

        //Lord Distribution
        this.sectorStats = [1,0,1,0,0,0,2];
        this.functionStats = [0,2,0,0,1,0,1];

        //Domain Distribution
        this.regionStats = [0,0,0,1,0,1,2];
        this.levelStats = [1,2,0,0,0,0,1];

        this.baseStats = [
            {
                name: "lordEndurance",
                stat: 1,
            },
            {
                name: "lordCharisma",
                stat: 2,
            },
            {
                name: "lordStrength",
                stat: 1,
            },
            {
                name: "lordVis",
                stat: 1,
            },
            {
                name: "lordHealth",
                stat: 0,
            },
            {
                name: "lordSpeed",
                stat: 0,
            },
            {
                name: "lordSight",
                stat: 3,
            },
            {
                name: "domainEndurance",
                stat: 1,
            },
            {
                name: "domainCharisma",
                stat: 2,
            },
            {
                name: "domainStrength",
                stat: 0,
            },
            {
                name: "domainVis",
                stat: 0,
            },
            {
                name: "domainHealth",
                stat: 1,
            },
            {
                name: "domainSpeed",
                stat: 1,
            },
            {
                name: "domainSight",
                stat: 3,
            }
        ]
    }

    // get active() {
    //     return this.getAttr('active');
    // }

    // set active(val) {
    //     this.setAttr('active', val);
    // }

    static get observedAttributes() {
        return ['active'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue === 'true') {
            this.open();
            this.shadow.getElementById('miniAgent').setAttribute('active', 'true');
        }
    }

    close() {
        var mainCont = this.shadowRoot.getElementById('mainCont');
        var main = this.shadowRoot.getElementById('main');
        this.active = false;
        // this.setAttribute('active', 'false');
        this.shadow.host.style.left = 'auto';
        this.shadow.host.style.right = '-40%';
        main.appendChild(mainCont);
        main.style.gridTemplateColumns = "4% 96%";
        this.shadow.getElementById('miniAgent').setAttribute('active', 'false');
    }

    open() {
        this.active = true;
        // this.setAttribute('active', 'true');
        this.shadow.host.style.display = 'block';
        setTimeout(() => {
            this.shadow.host.style.right = '0';
        }, 100);
    }

    determineLordLevel(attributes) {
        const levels = [
            {name: "LESSER", requirements: {Endurance: 3, Charisma: 2, Strength: 2, Visibility: 4, Health: 3, Speed: 3, Sight: 2}},
            {name: "NOBLE", requirements: {Endurance: 4, Charisma: 3, Strength: 3, Visibility: 5, Health: 4, Speed: 4, Sight: 3}},
            {name: "WARDEN", requirements: {Endurance: 5, Charisma: 3, Strength: 4, Visibility: 6, Health: 5, Speed: 4, Sight: 4}},
            {name: "REGENT", requirements: {Endurance: 6, Charisma: 4, Strength: 5, Visibility: 7, Health: 6, Speed: 5, Sight: 5}},
            {name: "PARAMOUNT", requirements: {Endurance: 7, Charisma: 5, Strength: 6, Visibility: 8, Health: 7, Speed: 6, Sight: 6}},
            {name: "HIGH", requirements: {Endurance: 7, Charisma: 6, Strength: 7, Visibility: 9, Health: 8, Speed: 7, Sight: 7}},
            {name: "GRAND", requirements: {Endurance: 8, Charisma: 7, Strength: 8, Visibility: 9, Health: 8, Speed: 8, Sight: 8}},
            {name: "SUPREME", requirements: {Endurance: 9, Charisma: 8, Strength: 9, Visibility: 10, Health: 9, Speed: 9, Sight: 9}},
            {name: "SOVEREIGN", requirements: {Endurance: 10, Charisma: 9, Strength: 10, Visibility: 10, Health: 10, Speed: 10, Sight: 10}},
            {name: "OVER", requirements: {Endurance: 10, Charisma: 10, Strength: 10, Visibility: 10, Health: 10, Speed: 10, Sight: 10}}
        ];
        
        for (let level of levels.reverse()) {
            let matches = true;
            for (let requirement in level.requirements) {
                if (attributes[requirement] < level.requirements[requirement]) {
                    matches = false;
                    break;
                }
            }
            if (matches) return level.name;
        }
        return "ALPHA";
    }
    
    // // Usage example:
    // let attributes = {Endurance: 4, Charisma: 3, Strength: 3, Visibility: 5, Health: 4, Speed: 4, Sight: 3};
    // console.log(determineLevel(attributes)); // Outputs: Noble Lord

    determineDomain(attributes) {
        const domains = [
            {name: "PRIME", requirements: {Endurance: 2, Charisma: 2, Strength: 2, Visibility: 2, Health: 2, Speed: 2, Sight: 2}},
            {name: "FOUNDATION", requirements: {Endurance: 3, Charisma: 3, Strength: 3, Visibility: 3, Health: 3, Speed: 3, Sight: 3}},
            {name: "GROWING", requirements: {Endurance: 4, Charisma: 4, Strength: 4, Visibility: 4, Health: 4, Speed: 4, Sight: 4}},
            {name: "ESTABLISHED", requirements: {Endurance: 5, Charisma: 5, Strength: 5, Visibility: 5, Health: 5, Speed: 5, Sight: 5}},
            {name: "FLOURISHING", requirements: {Endurance: 6, Charisma: 6, Strength: 6, Visibility: 6, Health: 6, Speed: 6, Sight: 6}},
            {name: "ADVANCED", requirements: {Endurance: 7, Charisma: 7, Strength: 7, Visibility: 7, Health: 7, Speed: 7, Sight: 7}},
            {name: "SOVEREIGN", requirements: {Endurance: 8, Charisma: 8, Strength: 8, Visibility: 8, Health: 8, Speed: 8, Sight: 8}},
            {name: "PARAMOUNT", requirements: {Endurance: 9, Charisma: 9, Strength: 9, Visibility: 9, Health: 9, Speed: 9, Sight: 9}},
            {name: "DOMINANT", requirements: {Endurance: 9, Charisma: 9, Strength: 9, Visibility: 9, Health: 9, Speed: 9, Sight: 9}},
            {name: "SUPREME", requirements: {Endurance: 10, Charisma: 10, Strength: 10, Visibility: 10, Health: 10, Speed: 10, Sight: 10}}
        ];
        
        for (let domain of domains.reverse()) {
            let matches = true;
            for (let requirement in domain.requirements) {
                if (attributes[requirement] < domain.requirements[requirement]) {
                    matches = false;
                    break;
                }
            }
            if (matches) return domain.name;
        }
        return "ALPHA";
    }

    loadStats() {
        this.baseStats.forEach(stat => {
            for (let i = 0; i < stat.stat; i++) {
                const pill = document.createElement('div');
                pill.classList.add('expPill');
                this.shadowRoot.getElementById(`${stat.name}`)?.appendChild(pill);
                switch (stat.name) {
                    case "domainHealth":
                        this.domainHealthTotal++;
                        this.blueGel++;
                        break;
                    case "domainStrength":
                        this.domainStrengthTotal++;
                        this.redGel++;
                        break;
                    case "domainEndurance":
                        this.domainEnduranceTotal++;
                        this.redGel++;
                        break;
                    case "domainCharisma":
                        this.domainCharismaTotal++;
                        this.goldGel++;
                        break;
                    case "domainSight":
                        this.domainSightTotal++;
                        this.blueGel++;
                        break;
                    case "domainSpeed":
                        this.domainSpeedTotal++;
                        this.whiteGel++;
                        break;
                    case "domainVis":
                        this.domainVisibilityTotal++;
                        this.goldGel++;
                        break;
                    case "lordHealth":
                        this.lordHealthTotal++;
                        this.blueGel++;
                        break;
                    case "lordStrength":
                        this.lordStrengthTotal++;
                        this.redGel++;
                        break;
                    case "lordEndurance":
                        this.lordEnduranceTotal++;
                        this.redGel++;
                        break;
                    case "lordCharisma":
                        this.lordCharismaTotal++;
                        this.goldGel++;
                        break;
                    case "lordSight":
                        this.lordSightTotal++;
                        this.blueGel++;
                        break;
                    case "lordSpeed":
                        this.lordSpeedTotal++;
                        this.whiteGel++;
                        break;
                    case "lordVis":
                        this.domainVisibilityTotal++;
                        this.goldGel++;
                        break;
                    default:
                        break;
                }
            }
        });
        if (this.blueGel != 0) {
            this.shadowRoot.getElementById('ii2').src = "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Blue-DigiGel-1.png";
            if (this.blueGel > 1) {
                this.shadowRoot.getElementById('ii3multi').innerHTML = `( <span class="gelQty">${this.blueGel - 1}</span> )`;
            }
        }
        if (this.redGel != 0) {
            this.shadowRoot.getElementById('ii3').src = "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Red-DigiGel-1.png";
            if (this.redGel > 1) {
                this.shadowRoot.getElementById('ii4multi').innerHTML = `( <span class="gelQty">${this.redGel - 1}</span> )`;
            }
        }

        if (this.goldGel != 0) {
            this.shadowRoot.getElementById('ii4').src = "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Yellow-DigiGel-1.png";
            if (this.goldGel > 1) {
                this.shadowRoot.getElementById('ii5multi').innerHTML = `( <span class="gelQty">${this.goldGel - 1}</span> )`;
            }
        }

        if (this.whiteGel != 0) {
            this.shadowRoot.getElementById('ii5').src = "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/White-DigiGel-1.png";
            if (this.whiteGel > 1) {
                this.shadowRoot.getElementById('ii6multi').innerHTML = `( <span class="gelQty">${this.whiteGel - 1}</span> )`;
            }
        }
    }

    changeStats(e) {
        //
        this.lordHealthTotal = 0;
        this.domainHealthTotal = 0;
        this.domainStrengthTotal = 0;
        this.lordStrengthTotal = 0;
        this.domainEnduranceTotal = 0;
        this.lordEnduranceTotal = 0;
        this.domainCharismaTotal = 0;
        this.lordCharismaTotal = 0;
        this.domainSightTotal = 0;
        this.lordSightTotal = 0;
        this.domainSpeedTotal = 0;
        this.lordSpeedTotal = 0;
        this.domainVisibilityTotal = 0;
        this.lordVisibilityTotal = 0;

        this.goldGel = 0;
        this.blueGel = 0;
        this.redGel = 0;
        this.whiteGel = 0;

        this.shadowRoot.getElementById('ii2').src = "";
        this.shadowRoot.getElementById('ii3').src = "";
        this.shadowRoot.getElementById('ii4').src = "";
        this.shadowRoot.getElementById('ii5').src = "";
        this.shadowRoot.getElementById('ii3multi').innerHTML = "";
        this.shadowRoot.getElementById('ii4multi').innerHTML = "";
        this.shadowRoot.getElementById('ii5multi').innerHTML = "";
        this.shadowRoot.getElementById('ii6multi').innerHTML = "";

        switch (e.target.value) {
            case "f1":
                this.functionStats = [0,2,0,0,1,0,1];
                break;
            case "f2":
                this.functionStats = [0,1,0,2,0,0,1];
                break;
            case "f3":
                this.functionStats = [1,0,0,1,0,0,2];
                break;
            case "f4":
                this.functionStats = [0,2,1,1,0,0,0];
                break;
            case "r1":
                this.regionStats = [1,0,0,1,0,0,2];
                break;
            case "r2":
                this.regionStats = [0,0,1,0,0,2,1];
                break;
            case "r3":
                this.regionStats = [2,0,1,0,1,0,0];
                break;
            case "r4":
                this.regionStats = [0,0,0,1,0,1,2];
                break;
            case "r5":
                this.regionStats = [1,0,2,1,0,0,0];
                break;
            case "r6":
                this.regionStats = [0,1,0,0,0,2,1];
                break;
            case "r7":
                this.regionStats = [0,0,1,0,0,1,2];
                break;
            case "r8":
                this.regionStats = [1,0,2,0,1,0,0];
                break;
            case "r9":
                this.regionStats = [0,1,0,2,1,0,0];
                break;
            case "r0":
                this.regionStats = [0,2,0,0,1,0,1];
                break;
            case "l1":
                this.levelStats = [2,0,1,1,0,0,0];
                break;
            case "l2":
                this.levelStats = [1,2,0,0,0,0,1];
                break;
            case "l3":
                this.levelStats = [1,0,2,0,0,1,0];
                break;
            case "l4":
                this.levelStats = [0,0,0,1,2,1,0];
                break;
            case "s1":
                this.sectorStats = [2,0,1,0,1,0,0];
                break;
            case "s2":
                this.sectorStats = [0,1,0,2,0,0,1];
                break;
            case "s3":
                this.sectorStats = [1,0,1,0,0,0,2];
                break;
            case "s4":
                this.sectorStats = [1,0,2,0,0,0,1];
                break;
            default:
                break;
        }

        this.baseStats[0].stat = this.sectorStats[0] + this.functionStats[0]; // lordEndurance
        this.baseStats[1].stat = this.sectorStats[1] + this.functionStats[1]; // lordCharisma
        this.baseStats[2].stat = this.sectorStats[2] + this.functionStats[2]; // lordStrength
        this.baseStats[3].stat = this.sectorStats[3] + this.functionStats[3]; // lordVis
        this.baseStats[4].stat = this.sectorStats[4] + this.functionStats[4]; // lordHealth
        this.baseStats[5].stat = this.sectorStats[5] + this.functionStats[5] + 3; // lordSpeed
        this.baseStats[6].stat = this.sectorStats[6] + this.functionStats[6]; // lordSight
        this.baseStats[7].stat = this.regionStats[0] + this.levelStats[0] // domainEndurance
        this.baseStats[8].stat = this.regionStats[1] + this.levelStats[1] // domainCharisma
        this.baseStats[9].stat = this.regionStats[2] + this.levelStats[2] // domainStrength
        this.baseStats[10].stat = this.regionStats[3] + this.levelStats[3] // domainVisibility
        this.baseStats[11].stat = this.regionStats[4] + this.levelStats[4] // domainHealth
        this.baseStats[12].stat = this.regionStats[5] + this.levelStats[5] // domainSpeed
        this.baseStats[13].stat = this.regionStats[6] + this.levelStats[6] // domainSight

        this.checkLevels();
        this.loadStats();
        this.gelTotal();
    }

    gelTotal() {
        const summedArray = this.sectorStats.map((value, index) => value + this.functionStats[index] + this.regionStats[index] + this.levelStats[index]);

        const totalSum = summedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        this.dgTotal = totalSum;
        this.shadowRoot.getElementById('xpStat').innerHTML = this.dgTotal * 50;
    }

    checkLevels() {
        // Lord
        var lendurance = this.shadowRoot.getElementById('lordEndurance').querySelectorAll('div').length;
        var lcharisma = this.shadowRoot.getElementById('lordCharisma').querySelectorAll('div').length;
        var lstrength = this.shadowRoot.getElementById('lordStrength').querySelectorAll('div').length;
        var lvis = this.shadowRoot.getElementById('lordVis').querySelectorAll('div').length;
        var lhealth = this.shadowRoot.getElementById('lordHealth').querySelectorAll('div').length;
        var lspeed = this.shadowRoot.getElementById('lordSpeed').querySelectorAll('div').length;
        var lsight = this.shadowRoot.getElementById('lordSight').querySelectorAll('div').length;

        // Domain
        var dendurance = this.shadowRoot.getElementById('domainEndurance').querySelectorAll('div').length;
        var dcharisma = this.shadowRoot.getElementById('domainCharisma').querySelectorAll('div').length;
        var dstrength = this.shadowRoot.getElementById('domainStrength').querySelectorAll('div').length;
        var dvis = this.shadowRoot.getElementById('domainVis').querySelectorAll('div').length;
        var dhealth = this.shadowRoot.getElementById('domainHealth').querySelectorAll('div').length;
        var dspeed = this.shadowRoot.getElementById('domainSpeed').querySelectorAll('div').length;
        var dsight = this.shadowRoot.getElementById('domainSight').querySelectorAll('div').length;

        var lordAttributes = {Endurance: lendurance, Charisma: lcharisma, Strength: lstrength, Visibility: lvis, Health: lhealth, Speed: lspeed, Sight: lsight}

        var lordLevel = this.determineLordLevel(lordAttributes);
        this.shadowRoot.getElementById('lordRank').innerHTML = lordLevel;

        var domainAttributes = {Endurance: dendurance, Charisma: dcharisma, Strength: dstrength, Visibility: dvis, Health: dhealth, Speed: dspeed, Sight: dsight}

        var domainLevel = this.determineDomain(domainAttributes);
        this.shadowRoot.getElementById('domainRank').innerHTML = domainLevel;
    }

    initStats() {
        // if (this.domainSetup === true) {
            this.loadStats();
            this.checkLevels();
            this.gelTotal();    
        // } else {
            // this.initFillerPills();
        // }
        this.shadowRoot.querySelectorAll(".statSelector").forEach(stat => {
           stat.addEventListener('change', (e) => {
                this.shadowRoot.querySelectorAll(".statBars").forEach(stat => {
                    stat.innerHTML = "";
                });
                this.changeStats(e)
           });
        });
    }
    
    initFillerPills() {
        var statBars = this.shadowRoot.querySelectorAll('.statBars');
        statBars.forEach(stat => {
            for (let i = 0; i < 10; i++) {
                const pill = document.createElement('div');
                pill.classList.add('placeholderPill');
                stat.appendChild(pill);
            }
        });
    }

    increaseStat(e) {
        var selected = e.target
        var selected2 = () => {
            if (e.target.id.includes('domain')) {
                return this.shadowRoot.getElementById(`${e.target.id.replace('domain', 'lord')}`);
            } else {
                return this.shadowRoot.getElementById(`${e.target.id.replace('lord', 'domain')}`);
            }
        };
        var selectedLength = selected.querySelectorAll('div').length;
        
        if (selectedLength < 10 && selected2().querySelectorAll('div').length > 0 ) {
            var statPill = document.createElement('div');
            statPill.classList.add('expPill');
            this.shadowRoot.querySelector(`#${e.target.id}`).appendChild(statPill);
        }
        if (selectedLength < 10 && selected2().querySelectorAll('div').length > 0 ) {
            this.removeStat(e);
        }
        this.checkLordLevel();
    }

    // increaseStat2(e) {
    //     var selected = e
    //     var selectedLength = selected.querySelectorAll('div').length;
    //     if (selectedLength < 10) {
    //         var statPill = document.createElement('div');
    //         statPill.classList.add('expPill');
    //         this.shadowRoot.querySelector(`#${e.id}`).appendChild(statPill);
    //     }
    //     this.removeStat(e);
    // }


    removeStat(e) {
        var selected = e.target
        var selectedLength = selected.querySelectorAll('div').length;
        if (e.target.id.includes('domain') && selectedLength != 0) {
            var firstChild = this.shadow.getElementById(`${e.target.id.replace('domain', 'lord')}`).querySelector('div');
            firstChild.remove();
        } else {
            var firstChild2 = this.shadow.getElementById(`${e.target.id.replace('lord', 'domain')}`).querySelector('div');
            firstChild2.remove();
        }
    }

    // shiftStats(e) {
    //     console.log("here",e);

    //     var selectedDomains = this.shadowRoot.querySelectorAll('.sbLeft');
    //     var selectedLords = this.shadowRoot.querySelectorAll('.sbRight');

    //     var allStatSections = this.shadowRoot.querySelectorAll('.statBars');

    //     allStatSections.forEach(stat => {
    //     var selectedLength = stat.querySelectorAll('div').length;
    //     if (stat.id.includes('domain') && selectedLength >= 0) {
    //         console.log("H4",stat);
    //         this.increaseStat2(stat);
    //         // var firstChild = this.shadow.getElementById(`${stat.id.replace('domain', 'lord')}`)?.querySelector('div');
    //         // if (firstChild != null) {
    //         //     firstChild.remove();
    //         // }
    //     } else {
    //         // var firstChild2 = this.shadow.getElementById(`${stat.id.replace('lord', 'domain')}`)?.querySelector('div');
    //         // if (firstChild2 != null) {
    //         //     firstChild2.remove();
    //         // }
    //     }
    //     });
        
    // }

    left() {
        var el = this.shadow.host;
        var sideScroll = this.shadowRoot.getElementById('vertBanner');
        var main = this.shadowRoot.getElementById('main');
        var uniMen = document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenu");
        if (el.style.right == "0px") {
            main.appendChild(sideScroll);
            el.style.right = "auto";
            el.style.left = "0";
            main.style.gridTemplateColumns = "96% 4%";
            this.shadowRoot.getElementById("miniAgent").setAttribute('active', 'true');
            uniMen.style.left = "43%";
            this.shadowRoot.getElementById("miniAgent").left();
        }
    }

    right() {
        var el = this.shadow.host;
        var mainCont = this.shadowRoot.getElementById('mainCont');
        var main = this.shadowRoot.getElementById('main');
        var uniMen = document.getElementById("getUniMenu").shadowRoot.getElementById("uniMenu");
        if (el.style.left == "0px") {
            main.appendChild(mainCont);
            el.style.left = "auto";
            el.style.right = "0";
            main.style.gridTemplateColumns = "4% 96%";
            this.shadowRoot.getElementById("miniAgent").setAttribute('active', 'true');
            uniMen.style.left = "43%";
            this.shadowRoot.getElementById("miniAgent").right();
        }
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('#exitBut').addEventListener('click', () => {
            this.close();
        });
        this.shadow.querySelectorAll('.statBars').forEach(stat => {
            stat.addEventListener('click', (e) => {
                this.increaseStat(e);
            });
        });
        this.initStats();
        // this.shadow.querySelectorAll('.dash').forEach(stat => {
        //     stat.addEventListener('click', (e) => {
        //         this.shiftStats(e);
        //     }); 
        // });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    width: 40%;
                    height: 100%;
                    position: absolute;
                    right: -40%;
                    top: 0;
                    z-index: 100;
                    transition: all 0.3s ease-in-out;
                    display: none;
                }
                #main {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 4% 96%;
                    grid-template-rows: 1fr;
                    font-family: "GM-I";
                }
                #mainCont {
                    font-family: "BS-R";
                }
                #vertBanner {
                    width: 50%;
                    height: 400%;
                }
                #bannerText {
                    width: 100%;
                    height: 100%;
                    writing-mode: vertical-rl !important;
                    text-orientation: mixed !important;
                    transform: rotate(180deg);
                    align-self: center;
                    font-size: .7rem;
                    letter-spacing: 0.3rem;
                    overflow: hidden;
                    animation: repeating 1010s linear infinite;
                }
                @keyframes repeating {
                    0% {
                      transform: rotate(180deg) translateY(60%);
                    }
                    50% {
                      transform: rotate(180deg) translateY(0%);
                    }
                    100% {
                        transform: rotate(180deg) translateY(60%);
                      }
                  }
                #mainCont {
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.9);
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 25% 15% 15% 33% 12%;
                    jsutify-items: center;
                    align-items: center;
                    overflow: hidden;
                    user-select: none;
                }
                #agentComp {
                    width: 100%;
                    height: 100%;
                }
                #assets {
                    width: 100%;
                    height: 100%;
                    background-color: blue;
                }
                #inputs1 {
                    width: 100%;
                    height: 100%;
                    margin-top: 5%;
                    margin-bottom: 5%;
                }
                #potential {
                    width: 100%;
                    height: 100%;
                }
                #buttons {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    font-family: "BS-R";
                }
                .button {
                    width: 80%;
                    height: 40%;
                    background-color: rgba(0, 0, 0, 0.9);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1rem;
                    cursor: pointer;
                    border-radius: 5px;
                    transition: all 0.2s ease-in-out;
                    letter-spacing: 0.1rem;
                    font-size: 0.9rem;
                }
                #exitBut {
                    color: #ff002d;
                    border: 1px solid #ff002d;
                    margin-left: 10%;
                    transition: all 0.2s ease-in-out;
                    user-select: none;
                }
                #exitBut:hover {
                    background-color: #ff002d;
                    color: black;
                    font-size: 1.2rem;
                    letter-spacing: 0.3rem;
                    font-family: "BS-B";
                }
                #regBut {
                    color: var(--accent);
                    border: 1px solid var(--accent);
                    justify-self: end;
                    margin-right: 10%;
                    user-select: none;
                }

                #regBut:hover {
                    background-color: var(--accent);
                    color: black;    
                }

                #expSect {
                    height: 100%;
                    width: 100%;
                    justify-self: center;
                    font-size: 1.2em;
                    color: var(--secondary);
                    letter-spacing: .5rem;
                    user-select: none;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 50% 50%;
                    align-items: center;
                    justify-content: center;
                }

                #expSect1 {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: end;
                    justify-content: center;
                }

                #expSect2 {
                    width: 100%;
                    height: 10%;
                    margin-top: 5%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-content: center;
                }

                #assetsCont {
                    width: 90%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: center;
                    overflow: hidden;
                    padding-left: 5%;
                    padding-right: 5%;
                    user-select: none;
                }

                .inventoryItem {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    border-radius: 5px;
                    overflow: hidden;
                    position: relative;
                    transition: all 0.1s ease-in-out;
                    cursor: pointer;
                }

                .inventoryItem:hover {
                    scale: 1.2;
                }

                .inventoryItem img {
                    width: 70%;
                    height: auto;
                    object-fit: cover;
                }
                .multiplier {
                    position: absolute;
                    right: 20%;
                    bottom: 15%;
                    font-size: .8rem;
                }
                #assetDigisette img {
                    width: 90% !important;
                    height: auto !important;
                }
                #inventoryItem1 img {
                    width: 100% !important;
                    height: auto !important;
                }
                #inputs1 {
                    width: 93%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr 1fr;
                    align-items: center;
                    justify-items: start;
                    padding-left: 5%;
                    padding-right: 2%;
                }
                .inputRow {
                    width: 96%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 18% 32% 16% 34%;
                    column-gap: 2%;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: start;
                    transition: all 0.2s ease-in-out;
                }
                input {
                    width: 80%;
                    height: 60%;
                    border-radius: 5px;
                    color: #ff002d;
                    background-color: transparent;
                    border: 1px solid #ff002d;
                    padding-left: 10%;
                    cursor: pointer;
                }
                input:focus {
                    outline: none !important;
                }

                select {
                    width: 92%;
                    height: 60%;
                    border-radius: 5px;
                    color: #ff002d;
                    background-color: transparent;
                    border: 1px solid #ff002d;
                    padding-left: 10%;
                }

                select:hover {
                    border: 1px solid var(--secondary);
                    color: var(--secondary);
                }

                #potential {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 20% 80%;
                    align-items: center;
                    justify-items: start;
                }

                #potText {
                    justify-self: center;
                }

                #potHeader {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 20% 60% 20%;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: center;
                }
                #potStats {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: auto;
                    align-items: center;
                }
                .statLine {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 35% 30% 35%;
                    grid-template-rows: 1fr;
                    align-items: center;
                    justify-items: start;
                    transition: all 0.2s ease-in-out;
                }

                .statLine:hover .statName {
                    color: var(--secondary);
                    letter-spacing: 0.3rem;
                }

                .statBars {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 4%;
                    justify-items: start;
                    transition: all 0.2s ease-in-out;
                    cursor: pointer;
                }
                .statBars:hover {
                    border-bottom: 1px solid var(--accent);
                }
                .sbLeft {
                    align-items: end;
                    flex-direction: row-reverse;
                }
                .sbRight {
                    align-items: start;
                    flex-direction: row;
                }
                .expPill {
                    width: 6pt;
                    height: 65%;
                    margin-top: 2%;
                    border: 1px solid var(--accent);
                    border-radius: 5px;
                    user-select: none;
                    pointer-events: none;
                }

                .placeholderPill {
                    width: 6pt;
                    height: 65%;
                    margin-top: 2%;
                    border: 1px solid var(--accent);
                    border-radius: 5px;
                    user-select: none;
                    pointer-events: none;
                    opacity: 0.2;
                }

                .statName {
                    text-align: center;
                    font-size: .9rem;
                    justify-self: center;
                    letter-spacing: 0.1rem;
                    user-select: none;
                    transition: all 0.2s ease-in-out;
                    cursor: pointer;
                }

                select:focus {
                    outline: none !important;
                }
                #dH1 {
                    justify-self: start;
                    margin-left: 20%;
                    align-self: end;
                    font-size:.9rem;
                    letter-spacing: 0.1rem;
                }
                #dH3 {
                    justify-self: end;
                    align-self: end;
                    margin-right: 20%;
                    font-size:.9rem;
                    letter-spacing: 0.1rem;
                    text-align: right;
                }
                #dH2 {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 40% 20% 40%;
                    grid-template-rows: 1fr;
                    justify-self: center;
                    align-items: end;
                    text-align: center;
                    font-size:1.3rem;
                    letter-spacing: 0.3rem;
                    pointer-events: none;
                    user-select: none;
                }
                .rank{
                    color: var(--secondary);
                    font-size: 1.2rem;
                }
                .dash {
                    color: var(--secondary) !important;
                    cursor: pointer !important;
                    pointer-events: all !important;
                    transition: all 0.2s ease-in-out;
                }
                .dash:hover {
                    scale: 1.1;
                }
                #sectorSelect {
                    pointer-events: none;
                    user-select: none;
                }

                .gelQty {
                    color: var(--primary);
                    font-family: "BS-I";
                }
                
                #xpBar {
                    width: 90%;
                    height: 100%;
                    border-radius: 5px;
                    border: 1px solid var(--primary);
                    padding-right: 10%;
                    justify-self: start;
                }

                #xpFill {
                    width: 0%;
                    height: 100%;
                    background-color: var(--accent);
                }

                .statSelector {
                    cursor: pointer;
                }
            </style>
            <div id="main">
                <div id="vertBanner">
                    <div id="bannerText">DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT    DOMAIN DEVELOPMENT</div>
                </div>
                <div id="mainCont">
                    <div id="agentComp">
                        <uni-menu-agent active="false" id="miniAgent"></uni-menu-agent>
                    </div>
                    <div id="assetsCont">
                        <div class="inventoryItem" id="assetDigisette">
                            <img src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Digisette-1-2.png" alt="digisette">
                            <div class="multiplier" id="ii1multi">001</div>
                        </div>
                        <div class="inventoryItem" id="inventoryItem1">
                            <img id="ii1" data-help="GelCase" src="https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Digisette/Clear-DigiGelCase-1.png">
                            <div class="multiplier" id="ii2multi"></div>
                        </div>
                        <div class="inventoryItem" id="inventoryItem2">
                            <img data-help="BlueGel" id="ii2" src="">
                            <div class="multiplier" id="ii3multi"></div>
                        </div>
                        <div class="inventoryItem" id="inventoryItem3">
                            <img data-help="RedGel" id="ii3" src="">
                            <div class="multiplier" id="ii4multi"></div>
                        </div>
                        <div class="inventoryItem" id="inventoryItem4">
                            <img data-help="YellowGel" id="ii4" src="">
                            <div class="multiplier" id="ii5multi"></div>
                        </div>
                        <div class="inventoryItem" id="inventoryItem5">
                            <img data-help="WhiteGel" id="ii5" src="">
                            <div class="multiplier" id="ii6multi"></div>
                        </div>
                    </div>
                    <div id="inputs1">
                        <div class="inputRow">
                            <div class="inputLabel">DIGISETTE</div>
                            <select id="ringSelect">
                                <option value="1">001</option>
                                <option value="2">EXPANSION COMING SOON</option>
                            </select>
                            <div class="inputLabel" data-help="DomainNumber">DOMAIN #</div>
                            <select data-help="Hi" id="domainSelect" class="statSelector">
                                <option value="d1">1</option>
                                <option value="d2">2</option>
                                <option value="d3">3</option>
                                <option value="d4">4</option>
                            </select>
                        </div>
                        <div class="inputRow">
                            <div class="inputLabel">FUNCTION</div>
                            <select id="functionSelect" class="statSelector">
                                <option value="f1">DISCOURSE</option>
                                <option value="f2">GALLERIST</option>
                                <option value="f3">MEMORY YARD</option>
                                <option value="f4">SEER HAVEN</option>
                            </select>
                            <div class="inputLabel">SECTOR</div>
                            <input id="sectorSelect" value="3">
                        </div>
                        <div class="inputRow">
                            <div class="inputLabel">REGION</div>
                            <select id="regionSelect" class="statSelector">
                                <option value="r1">LX INDUSTRY</option>
                                <option value="r2">WEST WING RIVER</option>
                                <option value="r3">OUTERLANDS</option>
                                <option value="r4">THE 12TH</option>
                                <option value="r5">PORTS OF ALANSABA</option>
                                <option value="r6">FALCONS HEART</option>
                                <option value="r7">EAST WING RIVER</option>
                                <option value="r8">SUSTAINER TOWN</option>
                                <option value="r9">ALANS ILSES</option>
                                <option value="r0">CITY CENTRAL</option>
                            </select>
                            <div class="inputLabel">LEVEL</div>
                            <select id="levelSelect" class="statSelector">
                                <option value="l1">GROUND</option>
                                <option value="l2">SUB-TERRAIN</option>
                                <option value="l3">MID</option>
                                <option value="l4">SKY</option>
                            </select>
                        </div>
                    </div>
                    <div id="potential">
                        <div id="potHeader">
                            <div id="dH1" class="headerNames"><span class="rank" id="domainRank">ALPHA</span><br>DOMAIN</div>
                            <div id="dH2">
                                <div class="dash" id="domainDash"><</div>
                                <div id="potText">POTENTIAL</div>
                                <div class="dash" id="lordDash">></div>
                            </div>
                            <div id="dH3" class="headerNames"><span class="rank" id="lordRank">ALPHA</span><br>LORD</div>
                        </div>
                        <div id="potStats">
                            <div></div>
                            <div class="statLine">
                                <div class="statBars sbLeft" id="domainHealth"></div>
                                <div class="statName">HEALTH</div>
                                <div class="statBars sbRight" id="lordHealth"></div>
                            </div>
                            <div class="statLine">
                                <div class="statBars sbLeft" id="domainStrength">
                                </div>
                                <div class="statName">STRENGTH</div>
                                <div class="statBars sbRight" id="lordStrength">
                                </div>
                            </div>
                            <div class="statLine">
                                <div class="statBars sbLeft" id="domainEndurance">
                                </div>
                                <div class="statName">ENDURANCE</div>
                                <div class="statBars sbRight" id="lordEndurance">
                                </div>
                            </div>
                            <div class="statLine">
                                <div class="statBars sbLeft" id="domainCharisma">
                                </div>
                                <div class="statName">CHARISMA</div>
                                <div class="statBars sbRight" id="lordCharisma">
                                </div>
                            </div>
                            <div class="statLine">
                                <div class="statBars sbLeft" id="domainVis"></div>
                                <div class="statName">VISIBILITY</div>
                                <div class="statBars sbRight" id="lordVis"></div>
                            </div>
                            <div class="statLine">
                                <div class="statBars sbLeft" id="domainSpeed"></div>
                                <div class="statName">SPEED</div>
                                <div class="statBars sbRight" id="lordSpeed"></div>
                            </div>
                            <div class="statLine">
                                <div class="statBars sbLeft" id="domainSight"></div>
                                <div class="statName">SIGHT</div>
                                <div class="statBars sbRight" id="lordSight"></div>
                            </div>
                        </div>
                    </div>
                    <div id="buttons">
                        <div id="exitBut" class="button">EXIT</div>
                        <div id="expSect" class="expSection">
                            <div id="expSect1">
                                <span id="xpLabel">DG:</span><span id="xpStat"></span>
                            </div>
                            <div id="expSect2">
                                <div id="xpBar">
                                    <div id="xpFill"></div>
                                </div>
                            </div>
                        </div>
                        <div id="regBut" class="button">REGISTER</div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('uni-c-domaindev', uniDomainDev);

export { uniDomainDev };