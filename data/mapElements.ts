import EelImage from 'public/assets/eel.gif'
import EelColoredImage from 'public/assets/eel-colored.png'
import SagenaImage from 'public/assets/sagena.gif'
import SagenaColoredImage from 'public/assets/sagena-colored.png'
import MerchantImage from 'public/assets/merchant.gif'
import MerchantColoredImage from 'public/assets/merchant-colored.png'
import KulaNorinskaImage from 'public/assets/kula-norinska.gif'
import KulaNorinskaColoredImage from 'public/assets/kula-norinska-colored.png'
import TribeCenterImage from 'public/assets/tribe-center.gif'
import TribeCenterColoredImage from 'public/assets/tribe-center-colored.png'
import Troubadour1Image from 'public/assets/troubadour-1.gif'
import Troubadour1ColoredImage from 'public/assets/troubadour-1-colored.png'
import Troubadour2Image from 'public/assets/troubadour-2.gif'
import Troubadour2ColoredImage from 'public/assets/troubadour-2-colored.png'
import Troubadour3Image from 'public/assets/troubadour-3.gif'
import Troubadour3ColoredImage from 'public/assets/troubadour-3-colored.png'

import { MapElementProps } from 'components/MapElement'

interface PositionedMapElement extends MapElementProps {
	top: number
	left: number
	zIndex: number
}

export const mapElements: PositionedMapElement[] = [
	{
		zIndex: 5,
		src: EelImage,
		hoverSrc: EelColoredImage,
		title: 'Mighty Abaia',
		text: `According to the tales of old, Abaia was known as the one who considered all the sea creatures his children and protected them furiously against anyone who would harm or disturb them. It was said that those who were foolish enough to catch fish in a sea where Abaia dwelled were immediately overwhelmed by a huge wave. That wave was caused by the thrashing of the Abaia's powerful tail. Another legend says that if someone were to harm a creature living in the Abaia's home, Abaia would cause a great rain storm flooding the land and drowning those who had caused the harm.

		One example of this ability is illustrated in the following story:

		"One day a man discovered a lake with many fish, and at the bottom of the lake lived a magic eel, but the man knew it was not. He caught loads of fish and returned the next day with other people from his village whom he had told of his discovery, and they were also very successful in fishing. One woman even laid hold of the great eel, Abaia, who dwelt in the depths of the lake, however he managed to escape. Now Abaia was angry that his fish had been caught and that he himself had been seized, so he caused a great rainfall that night, and waters of the lake started rising until all the people in that village drowned except for an old woman who had not eaten of the fish and saved herself by climbing a tree."

		Narentines were scary motherduckers but believe me, Abaia was scary too.
		`,
		top: 0.341,
		left: 0.152,
	},
	{
		zIndex: 2,
		src: Troubadour1Image,
		hoverSrc: Troubadour1ColoredImage,
		title: 'Troubadours - Jester',
		text: `Troubadours made another essential part of Narentine society. Both for better and for worse, for richer or for poorer, in sickness and in health, you get the idea…troubadours were there.

		Pirates would even bring them along to a boat so they could celebrate their victories or grieve over their fallen comrades. Texts of the troubadour songs dealt mainly with topics of war and courtly love. Many were humorous or vulgar. You can find their rights mentioned in the codex, where it says:

		“Troubadours have the right to rest on Saturdays, and on other days if the crew allows them.”

But they never rested anyway because they liked parties like no one else.`,
		top: 0.32,
		left: 0.572,
	},
	{
		zIndex: 3,
		src: Troubadour2Image,
		hoverSrc: Troubadour2ColoredImage,
		title: 'Troubadours - Fiddler',
		text: `Troubadours made another essential part of Narentine society. Both for better and for worse, for richer or for poorer, in sickness and in health, you get the idea…troubadours were there.

		Pirates would even bring them along to a boat so they could celebrate their victories or grieve over their fallen comrades. Texts of the troubadour songs dealt mainly with topics of war and courtly love. Many were humorous or vulgar. You can find their rights mentioned in the codex, where it says:

		“Troubadours have the right to rest on Saturdays, and on other days if the crew allows them.”

But they never rested anyway because they liked parties like no one else.`,
		top: 0.426,
		left: 0.644,
	},
	{
		zIndex: 4,
		src: Troubadour3Image,
		hoverSrc: Troubadour3ColoredImage,
		title: 'Troubadours - Zinther',
		text: `Troubadours made another essential part of Narentine society. Both for better and for worse, for richer or for poorer, in sickness and in health, you get the idea…troubadours were there.

		Pirates would even bring them along to a boat so they could celebrate their victories or grieve over their fallen comrades. Texts of the troubadour songs dealt mainly with topics of war and courtly love. Many were humorous or vulgar. You can find their rights mentioned in the codex, where it says:

		“Troubadours have the right to rest on Saturdays, and on other days if the crew allows them.”

But they never rested anyway because they liked parties like no one else.`,
		top: 0.384,
		left: 0.5071,
	},
	{
		zIndex: 1,
		src: SagenaImage,
		hoverSrc: SagenaColoredImage,
		title: 'Sagena',
		text: `The word sagena comes from the Latin word for a dragnet. Old Narentine ships called Sagenes (large nets) were first used for fishing, but later also for warfare because they were suitable for sailing through straits, where their biggest enemies would be trapped and thus easy prey for pirates.

		Narentians (Pagans) had 8888 sagenes. As a warship, it was equipped with cannons at stern and bow.`,
		top: 0.565,
		left: 0.163,
	},
	{
		zIndex: 6,
		src: TribeCenterImage,
		hoverSrc: TribeCenterColoredImage,
		title: 'Tribe Center',
		text: `Tribe center was the main building in Portus, mostly made of gold, it was also a meeting point where the tribe convocations took place. The first convocation was a constitutional one, its fruit was establishing a basic law of the tribe, one could actually call it a tribal codex:

		Everyone is supposed to participate in solving current problems;
		Every human being has equal rights to fresh food and spirits as long as it is not necessary to ration the portions for the common good;
		Everyone, after being called out, goes to the seized ship because, in addition to his share in the spoils, he also has the right to a piece of clothing.
		But if anyone takes just a coin  or a piece of merchandise too many, he will be unloaded on a desert island.
		If anyone robs a shipmate, his nose and ears will be cut off and he will be landed.

		No crew member is allowed to play for money while on board.

		All onboard lamps and candles shall be extinguished by eight o'clock in the evening. If some crew members want to drink after that time, they must do so on the open-air deck.

		Each crew member is obliged to clean and maintain their weapons so that they are always ready for use.

		No crew member shall bring his wife or any female person on board. If anyone breaks this rule, they will be punished by death.

		Any unauthorized abandonment of a ship or combat position shall be punishable by death or disembarkation on a desert island.

		Any strife on board is prohibited. All quarrels and disputes must be resolved on land, either by sword or gun.

		No man shall leave the crew until each member has acquired property worth one thousand pounds. If someone is maimed in battle, they will receive 100 silver coins from the ship's coffers, and for other injuries proportionally.

		The captain and the assistant helmsman receive two parts of the booty, the helmsman, the deck leader, and the gunners one and a half parts, the officers one part and one quarter while each sailor receives one part.

		Troubadours have the right to rest on Saturdays and other days if the crew allows them.

		Every first day of the month there were elections for a new Pirate leader.

		These rules applied to everyone, there were no exceptions. This last rule tells us that Narentines cared about every member of their society. There was always food and drinks inside the Center for everyone. So yeah, we can say it was a popular building in the harbor.

		Not only was it a place for parties or having fun, but it was also a business place. Almost all merchants were there. It was something similar to an old Roman piazza, except that vegetables you could find here were anything from gourds to gold.

		Throughout its long history, Tribe center was a place where theatrical and other plays and folk festivities, games, and parties took place.
		Every Saturday and Sunday the Tribe center was the site of great celebrations.

		Troubadours were always there for entertainment, they never rested and they always had 1 song more.`,
		top: 0.723,
		left: 0.8735,
	},
	{
		zIndex: 7,
		src: MerchantImage,
		hoverSrc: MerchantColoredImage,
		title: 'Merchant',
		text: `Not all of the Narentines were pirates, some of them were exceptional merchants. As our lovely Latin taught us a long time ago, mercatura means trade, traffic or merchandise, and better believe it that Naretines were masters of the trade. They could sell anything to anyone, not because they had pistols or knives on them, but they could just present you with any product and make you feel like you really need it.

		Merchants were an important part of Narentine society. Not only were they buying and selling locally inside their own village, but they also conducted negotiations with countries whose ships were seized by pirates. Mostly they would ask for ransom but a rather huge ransom, otherwise their sailors ended up dead.

		There was only one quote from Narentine merchants and it speaks for itself:

		“If me being a good merchant was nothing but wishful thinking, then my arms would take care of everything else.”`,
		top: 0.264,
		left: 0.508,
	},
	{
		zIndex: 8,
		src: KulaNorinskaImage,
		hoverSrc: KulaNorinskaColoredImage,
		title: 'Kula Norinska',
		text: `Coming soon`,
		top: 0.47,
		left: 0.385,
	},
]
