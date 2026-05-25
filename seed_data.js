const INITIAL_DATA = {
  "words": [
    {
      "word": "aberrant",
      "meaning": "Deviating from the norm; atypical.",
      "official_example": "His aberrant behavior alarmed his colleagues.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "acrimony",
      "meaning": "Bitterness or ill feeling, especially in speech or manner.",
      "official_example": "The divorce was filled with acrimony.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "adumbrate",
      "meaning": "To outline or sketch; to foreshadow vaguely.",
      "official_example": "The proposal adumbrated a plan for reform.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "aesthetic",
      "meaning": "Concerned with beauty or the appreciation of beauty.",
      "official_example": "The gallery had a refined aesthetic sensibility.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "alacrity",
      "meaning": "Brisk and cheerful readiness.",
      "official_example": "She accepted the invitation with alacrity.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "amalgamate",
      "meaning": "To combine or unite to form one organization or structure.",
      "official_example": "The two firms decided to amalgamate.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "ambiguous",
      "meaning": "Open to more than one interpretation; unclear.",
      "official_example": "The instructions were ambiguous and confusing.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "ameliorate",
      "meaning": "To make something bad or unsatisfactory better.",
      "official_example": "Steps were taken to ameliorate the situation.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "anachronism",
      "meaning": "A thing belonging to a period other than that in which it exists.",
      "official_example": "A knight with a smartphone is an anachronism.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "anodyne",
      "meaning": "Not likely to cause offence; mild and inoffensive.",
      "official_example": "He gave an anodyne answer to avoid controversy.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "anomalous",
      "meaning": "Deviating from what is standard, normal, or expected.",
      "official_example": "The anomalous results puzzled the scientists.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "antipathy",
      "meaning": "A deep-seated feeling of dislike; aversion.",
      "official_example": "She felt a strong antipathy toward deception.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "apocryphal",
      "meaning": "Of doubtful authenticity, although widely circulated as being true.",
      "official_example": "The story of his courage turned out to be apocryphal.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "approbation",
      "meaning": "Approval or praise.",
      "official_example": "The design met with the committee's approbation.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "arcane",
      "meaning": "Known only to a few people; mysterious or secret.",
      "official_example": "The text was filled with arcane symbolism.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "arduous",
      "meaning": "Involving or requiring strenuous effort; difficult.",
      "official_example": "The climb was arduous but rewarding.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "arrogate",
      "meaning": "To take or claim something without justification.",
      "official_example": "He arrogated authority that was never his.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "ascetic",
      "meaning": "Characterized by self-denial and severe abstinence.",
      "official_example": "The monk led a strictly ascetic life.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "assuage",
      "meaning": "To make an unpleasant feeling less intense.",
      "official_example": "She tried to assuage his grief with kind words.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "attenuate",
      "meaning": "To reduce the force, effect, or value of.",
      "official_example": "The drug attenuates the severity of the symptoms.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "audacious",
      "meaning": "Showing a willingness to take surprisingly bold risks.",
      "official_example": "The audacious plan shocked even his allies.",
      "sentiment": "positive",
      "intensity": 5
    },
    {
      "word": "avaricious",
      "meaning": "Having or showing an extreme greed for wealth.",
      "official_example": "The avaricious landlord raised the rent mercilessly.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "banal",
      "meaning": "So lacking in originality as to be obvious and boring.",
      "official_example": "The speech was full of banal platitudes.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "belligerent",
      "meaning": "Hostile and aggressive; eager to fight.",
      "official_example": "The belligerent nation refused all negotiations.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "bombastic",
      "meaning": "High-sounding but with little meaning; inflated.",
      "official_example": "His bombastic speech impressed no one.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "bucolic",
      "meaning": "Relating to the pleasant aspects of the countryside.",
      "official_example": "They retired to a bucolic village in the hills.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "cacophony",
      "meaning": "A harsh, discordant mixture of sounds.",
      "official_example": "The construction site was a cacophony of noise.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "calumny",
      "meaning": "The making of false and defamatory statements about someone.",
      "official_example": "He was the victim of relentless calumny.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "capricious",
      "meaning": "Given to sudden and unaccountable changes of mood.",
      "official_example": "The capricious weather ruined the picnic.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "castigate",
      "meaning": "To reprimand someone severely.",
      "official_example": "The judge castigated the lawyer for his conduct.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "cogent",
      "meaning": "Clear, logical, and convincing.",
      "official_example": "She made a cogent argument for the proposal.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "complaisant",
      "meaning": "Willing to please; acquiescent.",
      "official_example": "The complaisant assistant agreed with everything.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "convoluted",
      "meaning": "Extremely complex and difficult to follow.",
      "official_example": "The directions were hopelessly convoluted.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "copious",
      "meaning": "Abundant in supply or quantity.",
      "official_example": "She took copious notes during the lecture.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "corroborate",
      "meaning": "To confirm or give support to a statement or theory.",
      "official_example": "The witness corroborated the defendant's alibi.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "credulous",
      "meaning": "Having or showing too great a readiness to believe things.",
      "official_example": "Only the most credulous reader would accept the tale.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "culpable",
      "meaning": "Deserving blame or censure.",
      "official_example": "Both parties were found culpable in the dispute.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "deleterious",
      "meaning": "Causing harm or damage.",
      "official_example": "Smoking has deleterious effects on health.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "diffident",
      "meaning": "Modest or shy due to a lack of self-confidence.",
      "official_example": "He was too diffident to voice his opinion.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "dissonance",
      "meaning": "Lack of harmony among musical notes; conflict.",
      "official_example": "There was a cognitive dissonance in his argument.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "ebullient",
      "meaning": "Cheerful and full of energy.",
      "official_example": "Her ebullient personality lit up the room.",
      "sentiment": "positive",
      "intensity": 5
    },
    {
      "word": "enervate",
      "meaning": "To make someone feel drained of energy or vitality.",
      "official_example": "The oppressive heat enervated the workers.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "ephemeral",
      "meaning": "Lasting for a very short time.",
      "official_example": "Fame in the internet age can be ephemeral.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "equivocate",
      "meaning": "To use ambiguous language so as to conceal the truth.",
      "official_example": "The politician equivocated when pressed for details.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "erudite",
      "meaning": "Having or showing great knowledge or learning.",
      "official_example": "The professor was an erudite scholar.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "esoteric",
      "meaning": "Intended for or understood by only a small group.",
      "official_example": "The lecture was too esoteric for a general audience.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "exacerbate",
      "meaning": "To make a problem or bad situation worse.",
      "official_example": "His remarks only exacerbated the tension.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "fastidious",
      "meaning": "Very attentive to detail; difficult to please.",
      "official_example": "She was fastidious about the cleanliness of her home.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "felicitous",
      "meaning": "Well chosen or appropriate; pleasing.",
      "official_example": "It was a felicitous turn of phrase.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "furtive",
      "meaning": "Attempting to avoid notice; secretive.",
      "official_example": "He cast a furtive glance over his shoulder.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "garrulous",
      "meaning": "Excessively talkative, especially on trivial matters.",
      "official_example": "The garrulous neighbor talked for hours.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "grandiloquent",
      "meaning": "Pompous or extravagant in language, style, or manner.",
      "official_example": "His grandiloquent speech alienated the audience.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "gregarious",
      "meaning": "Fond of the company of others; sociable.",
      "official_example": "She was a gregarious host who loved entertaining.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "hackneyed",
      "meaning": "Lacking significance through having been overused.",
      "official_example": "The essay was full of hackneyed expressions.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "harangue",
      "meaning": "A lengthy and aggressive speech.",
      "official_example": "The coach harangued the team after the loss.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "iconoclast",
      "meaning": "A person who attacks cherished beliefs or institutions.",
      "official_example": "The artist was an iconoclast who defied convention.",
      "sentiment": "neutral",
      "intensity": 4
    },
    {
      "word": "impecunious",
      "meaning": "Having little or no money.",
      "official_example": "As an impecunious student he ate sparingly.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "impetuous",
      "meaning": "Acting without thought; impulsive.",
      "official_example": "His impetuous decision cost him dearly.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "inchoate",
      "meaning": "Not fully formed or developed; undeveloped.",
      "official_example": "The plan was still inchoate when presented.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "indolent",
      "meaning": "Wanting to avoid activity or exertion; lazy.",
      "official_example": "The indolent student barely passed his exams.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "ineffable",
      "meaning": "Too great or extreme to be expressed in words.",
      "official_example": "The beauty of the sunset was ineffable.",
      "sentiment": "positive",
      "intensity": 5
    },
    {
      "word": "inimical",
      "meaning": "Tending to obstruct or harm; hostile.",
      "official_example": "The harsh climate was inimical to agriculture.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "insipid",
      "meaning": "Lacking vigor or interest; lacking flavor.",
      "official_example": "The food was insipid and overcooked.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "intransigent",
      "meaning": "Unwilling to change one's views or agree.",
      "official_example": "The intransigent negotiator blocked every deal.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "laconic",
      "meaning": "Using very few words; brief and concise.",
      "official_example": "His laconic reply told us all we needed to know.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "lassitude",
      "meaning": "Physical or mental weariness; lack of energy.",
      "official_example": "The tropical heat caused a general lassitude.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "loquacious",
      "meaning": "Tending to talk a great deal; talkative.",
      "official_example": "She was loquacious at parties but shy at work.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "lucid",
      "meaning": "Expressed clearly; easy to understand.",
      "official_example": "The professor gave a lucid explanation.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "malevolent",
      "meaning": "Having or showing a wish to do evil to others.",
      "official_example": "The villain gave a malevolent smile.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "mellifluous",
      "meaning": "Pleasingly smooth and musical to hear.",
      "official_example": "She had a mellifluous voice that soothed listeners.",
      "sentiment": "positive",
      "intensity": 5
    },
    {
      "word": "mendacious",
      "meaning": "Not telling the truth; lying.",
      "official_example": "The mendacious witness was caught in several lies.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "mercurial",
      "meaning": "Subject to sudden changes of mood; unpredictable.",
      "official_example": "His mercurial temperament made him hard to trust.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "misanthrope",
      "meaning": "A person who dislikes humankind.",
      "official_example": "The recluse was a confirmed misanthrope.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "mitigate",
      "meaning": "To make less severe, serious, or painful.",
      "official_example": "The law was designed to mitigate the harm.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "obdurate",
      "meaning": "Stubbornly refusing to change one's opinion.",
      "official_example": "He remained obdurate in his refusal to negotiate.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "obsequious",
      "meaning": "Obedient or attentive to an excessive or servile degree.",
      "official_example": "The obsequious assistant agreed with everything.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "obtuse",
      "meaning": "Annoyingly insensitive or slow to understand.",
      "official_example": "He was being deliberately obtuse.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "onerous",
      "meaning": "Involving an amount of effort and difficulty that is oppressively burdensome.",
      "official_example": "The onerous task took weeks to complete.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "opaque",
      "meaning": "Not able to be seen through; not transparent; difficult to understand.",
      "official_example": "His motives remained opaque even to close friends.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "ostentation",
      "meaning": "Pretentious and vulgar display of wealth or knowledge.",
      "official_example": "The mansion was decorated with pure ostentation.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "paucity",
      "meaning": "The presence of something only in small or insufficient quantities.",
      "official_example": "There was a paucity of evidence for the claim.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "pedantic",
      "meaning": "Excessively concerned with minor details or rules.",
      "official_example": "The pedantic editor corrected every comma.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "perfidious",
      "meaning": "Deceitful and untrustworthy.",
      "official_example": "The perfidious ally switched sides at the last moment.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "perspicacious",
      "meaning": "Having a ready insight; shrewd.",
      "official_example": "The perspicacious analyst predicted the crash.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "petulant",
      "meaning": "Childishly sulky or bad-tempered.",
      "official_example": "The petulant child threw a tantrum.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "philanthropy",
      "meaning": "The desire to promote the welfare of others.",
      "official_example": "Her philanthropy funded dozens of schools.",
      "sentiment": "positive",
      "intensity": 5
    },
    {
      "word": "phlegmatic",
      "meaning": "Having an unemotional and stolidly calm disposition.",
      "official_example": "He accepted the bad news with phlegmatic calm.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "placate",
      "meaning": "To make someone less angry or hostile.",
      "official_example": "He tried to placate the furious customer.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "platitude",
      "meaning": "A remark or statement that has been used so often it is no longer interesting.",
      "official_example": "The speech was full of empty platitudes.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "plausible",
      "meaning": "Seeming reasonable or probable.",
      "official_example": "The explanation was plausible but unverified.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "precarious",
      "meaning": "Not securely held; dangerously likely to fall.",
      "official_example": "The ladder was in a precarious position.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "prevaricate",
      "meaning": "To speak or act in an evasive way.",
      "official_example": "He prevaricated when asked about the money.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "probity",
      "meaning": "The quality of having strong moral principles; honesty.",
      "official_example": "His reputation for probity was unimpeachable.",
      "sentiment": "positive",
      "intensity": 5
    },
    {
      "word": "prodigal",
      "meaning": "Spending money or resources freely and recklessly.",
      "official_example": "The prodigal heir squandered his inheritance.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "profligate",
      "meaning": "Recklessly extravagant or wasteful in the use of resources.",
      "official_example": "The profligate spending led to bankruptcy.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "propitious",
      "meaning": "Giving or indicating a good chance of success; favorable.",
      "official_example": "The stars seemed propitious for the venture.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "prosaic",
      "meaning": "Having the style or diction of prose; lacking imagination.",
      "official_example": "His explanation was accurate but thoroughly prosaic.",
      "sentiment": "negative",
      "intensity": 2
    },
    {
      "word": "prudent",
      "meaning": "Acting with or showing care and thought for the future.",
      "official_example": "It was prudent to save for emergencies.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "pugnacious",
      "meaning": "Eager or quick to argue, quarrel, or fight.",
      "official_example": "His pugnacious attitude made meetings tense.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "querulous",
      "meaning": "Complaining in a petulant or whining manner.",
      "official_example": "The querulous patient drove the nurses to distraction.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "quixotic",
      "meaning": "Exceedingly idealistic; unrealistic and impractical.",
      "official_example": "His quixotic plan to end poverty overnight failed.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "rancorous",
      "meaning": "Characterized by bitterness or resentment.",
      "official_example": "The rancorous dispute tore the family apart.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "recalcitrant",
      "meaning": "Having an obstinately uncooperative attitude.",
      "official_example": "The recalcitrant prisoner refused to follow orders.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "recondite",
      "meaning": "Not known by many people; abstruse.",
      "official_example": "The topic was recondite even for specialists.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "redolent",
      "meaning": "Strongly reminiscent or suggestive of; fragrant.",
      "official_example": "The air was redolent of pine and fresh earth.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "replete",
      "meaning": "Filled or well supplied with something.",
      "official_example": "The library was replete with rare manuscripts.",
      "sentiment": "positive",
      "intensity": 3
    },
    {
      "word": "reticent",
      "meaning": "Not revealing one's thoughts or feelings readily.",
      "official_example": "She was reticent about her past.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "sagacious",
      "meaning": "Having or showing keen mental discernment; wise.",
      "official_example": "The sagacious advisor steered the company well.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "sanguine",
      "meaning": "Optimistic, especially in a difficult situation.",
      "official_example": "He remained sanguine despite the setbacks.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "sardonic",
      "meaning": "Grimly mocking or cynical.",
      "official_example": "He gave a sardonic laugh at the suggestion.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "soporific",
      "meaning": "Tending to induce drowsiness or sleep.",
      "official_example": "The lecture was so soporific half the class fell asleep.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "specious",
      "meaning": "Superficially plausible but actually wrong.",
      "official_example": "He presented a specious argument that fooled no one.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "spurious",
      "meaning": "Not being what it purports to be; false or fake.",
      "official_example": "The document was later shown to be spurious.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "stymie",
      "meaning": "To prevent or hinder the progress of.",
      "official_example": "Lack of funding stymied the research.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "sycophant",
      "meaning": "A person who acts obsequiously to gain advantage.",
      "official_example": "The boss was surrounded by sycophants.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "taciturn",
      "meaning": "Reserved or uncommunicative in speech; saying little.",
      "official_example": "The taciturn soldier rarely spoke unless asked.",
      "sentiment": "neutral",
      "intensity": 2
    },
    {
      "word": "tenacious",
      "meaning": "Tending to keep a firm hold; not readily relinquishing.",
      "official_example": "She was tenacious in pursuit of her goals.",
      "sentiment": "positive",
      "intensity": 5
    },
    {
      "word": "tirade",
      "meaning": "A long, angry speech of criticism or accusation.",
      "official_example": "He launched into a tirade against the decision.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "torpor",
      "meaning": "A state of physical or mental inactivity; lethargy.",
      "official_example": "Winter plunged the bear into a deep torpor.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "truculent",
      "meaning": "Eager or quick to argue or fight; aggressively defiant.",
      "official_example": "The truculent student challenged every rule.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "turbid",
      "meaning": "Cloudy, opaque, or thick with suspended matter.",
      "official_example": "The turbid water made it impossible to see below.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "ubiquitous",
      "meaning": "Present, appearing, or found everywhere.",
      "official_example": "Smartphones have become ubiquitous.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "unctuous",
      "meaning": "Excessively flattering; oily.",
      "official_example": "The unctuous salesman made her uncomfortable.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "vacuous",
      "meaning": "Having or showing a lack of thought or intelligence.",
      "official_example": "Her vacuous smile revealed no understanding.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "venerate",
      "meaning": "To regard with great respect; revere.",
      "official_example": "The community venerated the elder healer.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "veracious",
      "meaning": "Truthful; habitually speaking the truth.",
      "official_example": "The veracious journalist refused to distort facts.",
      "sentiment": "positive",
      "intensity": 4
    },
    {
      "word": "verbose",
      "meaning": "Using or expressed in more words than are needed.",
      "official_example": "The report was unnecessarily verbose.",
      "sentiment": "negative",
      "intensity": 3
    },
    {
      "word": "vicarious",
      "meaning": "Experienced in the imagination through another's actions.",
      "official_example": "She got vicarious pleasure from her son's success.",
      "sentiment": "neutral",
      "intensity": 3
    },
    {
      "word": "vilify",
      "meaning": "To speak or write about in an abusively disparaging manner.",
      "official_example": "The tabloids vilified the celebrity without cause.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "vitriolic",
      "meaning": "Filled with bitter criticism or malice.",
      "official_example": "The vitriolic review destroyed the author's confidence.",
      "sentiment": "negative",
      "intensity": 5
    },
    {
      "word": "volatile",
      "meaning": "Liable to change rapidly and unpredictably; explosive.",
      "official_example": "The volatile situation required careful diplomacy.",
      "sentiment": "negative",
      "intensity": 4
    },
    {
      "word": "zealot",
      "meaning": "A person who is fanatical and uncompromising.",
      "official_example": "The zealot refused to hear any opposing view.",
      "sentiment": "negative",
      "intensity": 5
    }
  ],
  "related_pairs": [
    [
      "acrimony",
      "rancorous"
    ],
    [
      "acrimony",
      "vitriolic"
    ],
    [
      "alacrity",
      "ebullient"
    ],
    [
      "ameliorate",
      "mitigate"
    ],
    [
      "ameliorate",
      "assuage"
    ],
    [
      "antipathy",
      "inimical"
    ],
    [
      "antipathy",
      "malevolent"
    ],
    [
      "arduous",
      "onerous"
    ],
    [
      "bombastic",
      "grandiloquent"
    ],
    [
      "bombastic",
      "verbose"
    ],
    [
      "capricious",
      "mercurial"
    ],
    [
      "capricious",
      "volatile"
    ],
    [
      "cogent",
      "lucid"
    ],
    [
      "cogent",
      "perspicacious"
    ],
    [
      "calumny",
      "vilify"
    ],
    [
      "credulous",
      "obtuse"
    ],
    [
      "deleterious",
      "inimical"
    ],
    [
      "diffident",
      "reticent"
    ],
    [
      "diffident",
      "taciturn"
    ],
    [
      "erudite",
      "sagacious"
    ],
    [
      "ephemeral",
      "transient"
    ],
    [
      "equivocate",
      "prevaricate"
    ],
    [
      "fastidious",
      "pedantic"
    ],
    [
      "garrulous",
      "loquacious"
    ],
    [
      "garrulous",
      "verbose"
    ],
    [
      "grandiloquent",
      "bombastic"
    ],
    [
      "hackneyed",
      "banal"
    ],
    [
      "hackneyed",
      "platitude"
    ],
    [
      "iconoclast",
      "zealot"
    ],
    [
      "impetuous",
      "capricious"
    ],
    [
      "indolent",
      "torpor"
    ],
    [
      "insipid",
      "banal"
    ],
    [
      "intransigent",
      "obdurate"
    ],
    [
      "intransigent",
      "recalcitrant"
    ],
    [
      "laconic",
      "reticent"
    ],
    [
      "laconic",
      "taciturn"
    ],
    [
      "malevolent",
      "perfidious"
    ],
    [
      "mendacious",
      "spurious"
    ],
    [
      "mendacious",
      "perfidious"
    ],
    [
      "mellifluous",
      "redolent"
    ],
    [
      "mitigate",
      "assuage"
    ],
    [
      "obsequious",
      "sycophant"
    ],
    [
      "obsequious",
      "unctuous"
    ],
    [
      "onerous",
      "arduous"
    ],
    [
      "pedantic",
      "fastidious"
    ],
    [
      "probity",
      "veracious"
    ],
    [
      "prodigal",
      "profligate"
    ],
    [
      "pugnacious",
      "belligerent"
    ],
    [
      "pugnacious",
      "truculent"
    ],
    [
      "querulous",
      "petulant"
    ],
    [
      "rancorous",
      "vitriolic"
    ],
    [
      "sagacious",
      "perspicacious"
    ],
    [
      "sanguine",
      "ebullient"
    ],
    [
      "sardonic",
      "caustic"
    ],
    [
      "soporific",
      "torpor"
    ],
    [
      "specious",
      "spurious"
    ],
    [
      "sycophant",
      "obsequious"
    ],
    [
      "tenacious",
      "intransigent"
    ],
    [
      "tirade",
      "harangue"
    ],
    [
      "truculent",
      "belligerent"
    ],
    [
      "verbose",
      "grandiloquent"
    ],
    [
      "volatile",
      "mercurial"
    ],
    [
      "zealot",
      "iconoclast"
    ]
  ]
};
