const commandments = [
    {
        _id: 1,
        textId: "Didy voalohany",
        commandment:
            "Aza manana Andriamanin-kafa afa tsy Izaho ihany hoy Jehovah",
        desc: `Ny atao hoe Andriamaninkafa dia izay tompoinao ankoatrany Jehovah = Allah = YHWH 
        tahaky ny hoe Tromba sy zazavavindrano sy Djin sy kalanoro, sns...satria tompoina 
        sy ankatoavina mafy izy ireny ho an'ireo mpanaradia azy, ary ny fametrahana zavatra 
        anankiray ho priorité ankoatran'Andriamanitra ihany koa dia efa Andriamaninkafa izay 
        ( oh : Tokony andeha hivavaka ianao nefa lasa any anaty Bar, tsy misy fotoana ivavahana
        intsony ianao satria miasa loatra mba ahazo vola, sns...), ary Jesoa dia tsy Andriamanitra
        fa Zanak'Andriamanitra izay feno ny Fanahin'Andriamanitra ka nomeny Hery sy Fahefana ety
        an-tany sy any an-danitra, mitovy @ hoe afaka manjaka @ fanananao ny zanakao ary raha
        izy no mangataka dia manome foana ianao, fa tsy midika akory hoe ny zanakao dia ianao
        ihany, ary tsy hoe niteraka ihany koa akory Andriamanitra fa ny Fanahiny no nanamboarana
        an'i Jesoa, izay no nahatonga an'i Jesoa no efa teo hatramin'ny famoronana izao tontolo
        izao satria vao nisy Andriamanitra dia efa nisy ny Fanahiny dia midika izany fa efa nisy
        ihany koa Jesoa satria Fanahiny no namoronan'Andriamanitra azy, izany hoe Jesoa dia 
        mbola Zavaboaharin'Andriamanitra saingy t@ alalan'ny Fanahiny no namoronany Azy fa tsy
        tahaky ny Anjely namboarina t@ volamena sy volafotsy , na isika olombeolona namboarina
        t@ vovoka . Noho izany, tsy tokony hivavaka @ Jesoa ianao fa ivavaka @ Andriamanitra
        saingy kosa tokony hankatoa izay nampianarin'i Jesoa satria ny Fanahin'Andriamanitra
        mihintsy no tao anatiny, anisany tokony ankatoavina izany ny hoe " Izay rehetra 
        angatahinareo @ Ray @ anarako dia ho azonareo tokoa izany", izay no antony tokony
        hamaritana ny vavaka foana @ anaran'ny Jesoa eo aloan'ny Amen.`,
    },
    {
        _id: 2,
        textId: "Didy faharoa",
        commandment:
            " Aza manao sarin-javatra voasikotra ho anao fa fahavetavetana eo anatrehan'ny Jehovah izany na endrika inona na endrika inona.",
        desc: `Misy antokompinoana mivavaka na mangataka @ sary vongana ka ataony any antranony na any ampiangonana 
        izany na any @ toerana hafa, Ireo mpandika ireo Didy anankiroa voalohany ireo ilay atao hoe Mpanompo 
        Sampy hoy hatrany ny Anjely Gabriel.`,
    },
    {
        _id: 3,
        textId: "Didy fahatelo",
        commandment:
            "Aza manonononona foana ny anaran'ny Jehovah Andriamanitra.",
        desc: `Aza minianiana foana @ Andriamanitrao( oh : jure dévant Dieu, na isak'izay zavatra
        miseho na mandalo dia hoy anao hoe " Andriamanitrô", na rehefa ilay ianao mifamaly 
        amin'olona iny dia hoy ianao hoe " Andriamanitra mihintsy mahita raha zaho nanao an'izany".
          Tena fahotana sy mampaloto ny fanahy ireo rehetra ireo ka aoka isika hitandrina.`,
    },
    {
        _id: 4,
        textId: "Didy fahaefatra",
        commandment: "Tandremo ny Sabata",
        desc: `Efa potiky ny Calendrier tsy marina isika ka sarotra ny hamantatra marina ny tena andro Sabata 
        ankehitriny satria mitombina ho Zoma na Sabotsy na Alahady ny Sabata indraindray rehefa arahina 
        @ Calendrier Lunnaire izay nampiasaina t@ andron'ny Mpaminany ka ny Musulman sy ny judaïsme sisa
        no mampiasa izany ankehitriny, fa ny tena manan-danja dia ilay fanokananao andro anankiray fahafito
        Hanompoana tanteraka an'Andriamanitra Rainao ary tsy hanomezanao lanja zavatra hafa afatsy Izy irery
        ihany.`,
    },
    {
        _id: 5,
        textId: "Didy fahadimy",
        commandment: "Manajà ny Ray aman-dReninao",
        desc: `Tsy manao zavatra mampalahelo azy ireo, mikarakara azy ireo raha tojo fahanterana izy ireo,
        tsy ny niteraka anao ihany no Ray aman-dRreninao fa ireo rehetra ho mitovitovy taona @izy ireo.
          Ary raha toa ka manana alahelo aminao ny Ray aman-dReninao nefa maty tampoka ianao ka ho sarotra 
          ny ahatafavoaka anao eo anoloan'ny fitsarana.`,
    },
    {
        _id: 6,
        textId: "Didy fahaenina",
        commandment: "Aza mamono olona",
        desc: `Tsy ny mitsatoka antsy na mamosavy na mamono olona mivantana ihany no atao hoe mamono olona
        fa na ireo izay manao fihetsika na teny mamono ny Fo na ny any anaty dia anisan'izany
        ( oh : nandratra ny fon'ilay ankizy vavy fofombadinao ny teninao nilaza fa isaraka aminy ianao 
        nefa tsy t@ rariny no nanovanao izany ka namono tena izy, dia miomana fa miandry anao ny fitsarana)`,
    },
    {
        _id: 7,
        textId: "Didy fahafito",
        commandment: "Aza mijangajanga",
        desc: `Rehefa nivady t@ olona iray tsy nahazo alalana t@ Ray aman-dreninao na teo anatrehan'ny 
        mpanompon'Andriamanitra ianao dia Mijangajanga. Fantatro sy maro ianareo no efa nandefa Mp
        taty manontany ny mahakasiky ny fijangajangana fa izay Nampianarin'ny Anjely ahy no ambarako eto
        ( misy antokom-mpinoana mantsy mampianatra fa raha tsy vita soratra arapanjakana dia tokatrano maso
        ka tsy mandray anjara ampiangonanaaey azo lazaina fa fijangajangana izany. 
        miomana fa miandry anao ny fitsarana), sns...`,
    },
    {
        _id: 8,
        textId: "Didy fahavalo",
        commandment: "Aza mangalatra",
        desc: `Ireo izay maka zavatra tsy an'azy ka tsy nahazo alalana t@ tompony no mpangalatra na inona izany na inona izany`,
    },
    {
        _id: 9,
        textId: "Didy fahasivy",
        commandment: "Aza mandainga",
        desc: `Tsy misy ny lainga masina fa na lainga foronina na lainga tsy nahy nohon'ny fitiavan-dresaka 
        na fanarotsaromana resaka na lay hoe" Toutes la vérité n'est pas bonne à dire" fa dia FAHOTANA 
        MITONDRA loto @ fanahy AVOKOA izany rehetra izany.`,
    },
    {
        _id: 10,
        textId: "Didy fahafolo",
        commandment: "Aza mitsiriritra = Aza mialona",
        desc: `Ny fialoanana dia miafara @ fisainana ratsy na mosavy na manaratsy na famonoana,sns...`,
    },
];

export { commandments };
