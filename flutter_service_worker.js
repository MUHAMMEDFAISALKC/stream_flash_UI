'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "acdf67b0cc36c05dc19db50784dab84f",
".git/config": "358e1ebb00670f365d9d20b6de6ec1b0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2ba94121c0a55344475f3dba20beb45d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "de7c90ce68976828a3836a63caa14635",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4ef75d35a6953c870476889d52cdbf8c",
".git/logs/refs/heads/main": "4ef75d35a6953c870476889d52cdbf8c",
".git/logs/refs/remotes/origin/HEAD": "1b7bd328891e2af625839d6a00d19514",
".git/logs/refs/remotes/origin/main": "a3c13c98fbeca74a9a7a99bca9ce19c8",
".git/objects/07/045bdb090656fa1630f2f4b1b9a984830c5255": "59452cb3a983892754a50bfb21d9d861",
".git/objects/0e/389909cf6e18c43e9844ce98774ba45a56a425": "07d27397525d7d3deb063b6d6e1eca9b",
".git/objects/16/ddf11864245974e0891a711857456666c728a6": "80062ec33056796b1089e781d3d8813d",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/bd4abcf0a37f0ff5b7c9c22edc0d17b0faa5af": "029ba731c523279f64916aa1639b514c",
".git/objects/1d/d551f36b34cbbc62e1640993a9e2d7c4909b10": "05a99c510600b2422f8c4aa66052b403",
".git/objects/25/9a6b6bebbfd037755b64dccdd84de101121604": "fdaf0f63d416bd36070d8018d3fd555a",
".git/objects/27/f23a3dbbc4c5ca12e6b2c33ee33a987f9f4da2": "84ec5da868c128a9b1034d38a8398e95",
".git/objects/2a/3558f40096990b0599472b66e63de46d4797b2": "fbc651f644b538e25ac1da188bf0442e",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/96d0c10a3fb42c3275a254a7203a07e68d6742": "248034dbc737c806ad812ad886ddc1bf",
".git/objects/2d/8af732c2c9c2f428eb5730618440399114516b": "69acad50b54d14f0e6f221de04060612",
".git/objects/30/3906d3b570fc7ae5e01fb3d9bb2fa0beadcdfd": "d62fd9268adaed2338e989d57444e8a5",
".git/objects/32/6ed3caeeaf8401d058feada17fb40ed1d105d1": "be11020cfff88eb6bd9df8f841a78b7f",
".git/objects/33/2ba898a344bed95b203b32635e75a43ad955a1": "46e9d44272ea5b1d56d5eb81620de0d1",
".git/objects/35/080749701431ea21ca078b61cc89701d04f921": "c077f1a868be15e88b181967147c904d",
".git/objects/35/4a1fc33a6dea1881841a0decb43907a0945da3": "db3c3212a3a036ee8640238a77d1586a",
".git/objects/3e/bf99710baa462db07c9c30651ef087a615be66": "ae5b45e14225b7db7d5a007034842d6c",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/96a4f0e0b8658fb78275f0fbf01bff3b07d7ed": "6edc660d882fafc1b9810d527c1bfced",
".git/objects/41/b3d4f22004111ca35fa9e9f7500d0c0f485ccc": "8512af543652465d2460b4410d186189",
".git/objects/42/4300f0fb06419bbfe4e895bb24ac71f871b686": "d47a4655c9f6faa31c6af19e6e214c9f",
".git/objects/42/c724991b10ada136ff5e209a1e687cd936311d": "c7b3995d611e06285ae35520b0dce336",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/02107a723539a635e9bb4b8d10194d13f0fc95": "a5fef71c0ea904b6649c125b109a13eb",
".git/objects/49/f77629b083d0cb3642e3da8b37bb4a3468c855": "6ffc83712593824b859f98ac03dc043e",
".git/objects/4a/d1c2fb0098a195a06e62cb262b5c1856bdbc38": "2569b6ae9f8b1c1042a46835fda07b60",
".git/objects/4e/210a248ea20da385cb7ed8002f7a79f395913d": "285dd87a32ad86edfbbabee74b4ff64d",
".git/objects/51/2d0247b39ea5a8ac18797c819c0fb44d0557f9": "a83391b9e38a4c6baebb9461a36f668b",
".git/objects/51/e932d7bae6cb928a1304bba0b9b9c45ad7ee79": "c38a91b443f461f0b3704e0bc94a68ec",
".git/objects/54/871c9b477fd306b112ad473fa0bedc0deed563": "7b18ebf862dbe1a193782dd06ce8e9c4",
".git/objects/56/724dca1b845e4790d696727c516af54d9e7079": "22a220146a3d15f6db273c34611e590a",
".git/objects/58/090657ca1d9c9336ce9fd1a2b88872f6eb76c7": "df5063cb79a764d0abb217abb786ec3a",
".git/objects/58/71047cbbc836d36b831a7c051600b949fda7a1": "1566b60686c84bd12f809a6a0b645cb0",
".git/objects/58/bf1fc749f26a766782dd3accc5fc62a5c966f1": "27767affe6b7e2336ff4238b96f05e21",
".git/objects/5a/39f00e6fc9b803725f30996d789efae7e72fb3": "c24db77cbcfe1e174220f2c821a3e0f8",
".git/objects/5c/6ce9232dc5d5dcdacb8e1d08398fd1aee0ceb9": "4d2db51c3ba52d3588c73fe894cee975",
".git/objects/5f/60e5432b90407ac1e43b9051787268fc112e74": "2587559836c00f53ed23c66fa1673107",
".git/objects/60/0381d065a8b050b21bfea8bb33cadb9e341a5d": "bdc2f9344e3f04ff94127d0a0dc1abe1",
".git/objects/6a/51142c3588c72fdc8d1aa9d1a7f7863cdc6b11": "5e4c63453d15457e69126be31a730f3b",
".git/objects/6a/5f190062502fa9f3ff630aabb13c3ffb956cc0": "0b20265ca2af2667a57e0fbc4d26211a",
".git/objects/70/0bf65fc5f5e3f46515f6e79dbdbc3689e7480e": "d6498b43ca1c03f91f1b8eb72d92e441",
".git/objects/72/68c18c11aeb9110729ac668cd314120726c87a": "fe2dd9ccd6af606e1c5da3f4e8bdf26f",
".git/objects/74/e80580601c4ad3ca7b3e602e21ead1ce7d19d7": "6fefe5145125e83a96d1aa88f0bf7037",
".git/objects/78/a7801ec00fbad0e603b278e044811787b19864": "017671f305ba0d33ab74d1572e231a43",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/c5c080a679f561a1ba958bcd9dfd013c57e914": "d05abfedfd321962436a6bb1add8a5af",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/b66abcb28393b4a6a230b8af228531657b2bdc": "a472007d604e85da07c709ba359a7ea1",
".git/objects/7d/ddcb01c51dc02abdbd52d4af9b88d432ee3175": "669d3ff85103e85109704cd6035376aa",
".git/objects/7e/039506092ba410853d329cfb7f22881fa6fb5c": "1ed43189fed4c2e4fff626cf0b0d5771",
".git/objects/7e/10fd4e4fa984db1e86d71638e870e253f1b605": "f274a9b9ff1d48ef09646c28d9c596db",
".git/objects/82/3fa50fb2bd27801f1f64baae4216393507342a": "bf7501e394abbc092a79b05e5242fec0",
".git/objects/83/1aaa0b91d188d2074c0f293a65d1bd0cee9b98": "de9f796f4c7946c0878aec2dca307f8f",
".git/objects/84/87812177e4f4dbffea1580ff5afeb7497e3187": "cd399c56f9b4e0513f705946c7508cd5",
".git/objects/84/d332454c1e3fe3c0f608d68b23cac67860e694": "9642862460c944e60e01abf0bc6512f6",
".git/objects/86/ccd4e6f5de35d09881ad3479dcdd08b8ed0608": "8e5b14d7677aa7cb2481a0b3a2edbf78",
".git/objects/87/1a053cb2ef9467afcb33bf6fd743e46dcc7d85": "80f05c002559fc4752f6fc8e481e16d4",
".git/objects/89/7d0dc467eb03c837e306de1621ed5cebdd482d": "291f340200719578583b7b8eaec2cab4",
".git/objects/8d/01b99b374b05e3c4db023524b82d7f1e450b61": "b72f23afff76dd879fb51f00e0177955",
".git/objects/8d/de22a057c428a8577563b7f3db025f0c19f19f": "1c7f19e6c8b060a31f48b794eb841206",
".git/objects/91/9c2c22077680d002ed3e32d18578c78d9c3063": "d4862dadeb09ccf70a01db9d0744f169",
".git/objects/95/ff2da2d06635f39876ebedb823352631982b24": "cfa22a42be03c3cd9a67368a4a99de1a",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/ce1286e19b9c9629657181013edb721e8b1802": "01ab712db8a2e17f9b02aa510be1c834",
".git/objects/99/d6f52f79a5312b932989b49adfddcf93ef7c91": "50eacfafd7f1d7697c6c05ac8ec4b833",
".git/objects/9c/8d6c59a0ca910f79fb0c5ad18eef4ebecb0df7": "f5684449a23cfce4ef5e204e53c39c0c",
".git/objects/9d/c79ebcf44ce6ec3f3f74eb645ece4e22a0d6a6": "cbfd8bc45899bcc7b5df300a80b3a6dc",
".git/objects/9f/b6cb189be86f1959dce8f39be2a8f362de2b1f": "0037a1cab68e1d4b3bf2fe1ec5b05e74",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/40f4a025b316994a5553228677b71be00ef987": "2c2a644c0b87c945da39bc5064c39b1c",
".git/objects/a7/95aaa777d1c378a61c3b395a6b574962ad4f5f": "fbbf72cff765d28a4c4dff8bb4d70ca8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/2e11e96fe39b3d81f492ce870a70046317a680": "0be4971fd7bc2fcb6599bb8abb5d93d0",
".git/objects/b2/6d9fd4143826308b96719c39d275af6a1de23b": "9cd835ab52a965b805fde231114fd0b8",
".git/objects/b4/13c8824397cc61220cebd69a531b05c3acb331": "5ab62d01c156d16b4b623cf18940f276",
".git/objects/b5/35cbede174935d4921b2af3516b9a8e018d25c": "a57ca6cb0ab6c557c6c6c98d3421d683",
".git/objects/b5/469619b860b6d2dfbb937c86bf0c5db4707054": "4c765356bd3b9365c12a813ce4e1b2b2",
".git/objects/b7/c5d482d9a6c4b62aa8821878b7d9524c64bd3e": "5398a1d788d3feb63c082b5968fee93c",
".git/objects/ba/c583c1918799a3a2191fb3e18a96ec292add47": "2dade946f6128e248bc723bc5638dae0",
".git/objects/c4/13d4720e9c1b939b0114db0f3b281036e62279": "71235b6bf2fdf5399726fde07a93f06a",
".git/objects/cb/02a1f5330db0d99a6e1362d756437188c00038": "703f472c5ab18f1d45d4fe6fc2ae341d",
".git/objects/cb/22dab9429f332dbbc67f62235f71845eec2061": "4b5099414a488a2b6e94dbe223af5dcb",
".git/objects/cb/4c1ab8fbc6ff505aa93f3e40c7bf679f463c83": "7c159906f75facb80210fbc105c9a656",
".git/objects/cb/d058dc446bb79d9e1c9bd6c0372b9b00cca93d": "be5155bc75c28043d39829e481277bd1",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/5e9c8928dd5b64d1f67dc34aca4fed11f60d1f": "063b701ba46b4e02437a84e24c5b4b12",
".git/objects/cd/de74ed6a378080c2a48a7a0c56274b9c35f0ba": "37b227f5e073ea0ba8bd88f70b9fe784",
".git/objects/cf/120dab6230118ce93192586690f88168150004": "5079f0652a796ec22d8d49eddc13b7d8",
".git/objects/d2/2fc323549516e0c669f657eabe04915f6daf97": "9659cddbdf2222a2b39595d71936e686",
".git/objects/d2/e8d6ce4deb7d6b43484208adcdee587641db07": "b4d978d19f8a9737783e6512f1411232",
".git/objects/d4/88999929effb0a48fbdc8214828bde8c400859": "ca766e40921a9296847dc17215a3b55d",
".git/objects/d5/af6659e8878626e247d5de80c421f9498858e7": "c68bed9eb96c656c4fed253cee41cfe9",
".git/objects/d6/6379bda5db902117ea74ef576904e3a55b92ee": "fcaf9420923a411d0dacb845347aec3f",
".git/objects/d7/45a8328a2c4a4c1240b95fbadf1ec4b72f78e9": "97e4679663e506a4fe0fcc4ae97f161a",
".git/objects/d7/d5ae95f1085c6491d4e475de2c73db411b881c": "e283dfdb2a1e4df4cdc56f249a5720f8",
".git/objects/db/5ac046ab42051810b845b8e1b03b3b7b1bdd6c": "fb045fe46a5ffd8b80f6355b5b0df624",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e4/b6424cd6d44a22f5a6a1c704f0e75478495bc6": "b41bd88302aa7821fcc837ef0b3fe36e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/11f0407be9031049166ed14a95369f1df00aa0": "9880bd828bf81047d3665e5dedd8a4a3",
".git/objects/e8/e3d920b1b7804a8e87b6068cfc0ee32e66747d": "ec508b970e8d7b79622ca6a77ea79688",
".git/objects/e9/8d71799e3475d0544dd0f287a4f253ffa95eac": "82c8a04c3bd7883c01de62d0bc9549d6",
".git/objects/ea/76b8d3d7d2e0beeef4917e7d72439f388342b9": "6087d0da0afccee784a0e5e406077ec1",
".git/objects/ea/d4883833b65f0a13a481e5d18a74404324ae9b": "97e73627443523b209130c2a9a175371",
".git/objects/ee/1232ea9d64e46891e748cabbec1c43e07a52e2": "85e89c44466ee943eb81287f13b31816",
".git/objects/f1/457911122d1c653fc950fbd49c285f251253fc": "228f732b82f0a8e2a0841e3e0c2605a7",
".git/objects/f1/8b40f771a38707afaae2d12fff026a19f0b403": "18e4fb7d82541b4e7f370b4134584b9c",
".git/objects/f4/65ea8211eccc02bb1080876367524f0f674244": "a8b7ec0470021348d8985b75adb2a013",
".git/objects/f7/c9c54c132d01295d188e55d8916798f5ce57fd": "4908fbde5412023dbe0a6a9209b61b94",
".git/objects/f8/0c2324719dfabc7c9f078591b5cfcf43bb6e33": "0fe829741976e2662d3f435eb48d2412",
".git/objects/pack/pack-6287e07776fd679e9ec00b517ea4f75aeadc85bb.idx": "068cd3886c662ef5a7d454842e2faf86",
".git/objects/pack/pack-6287e07776fd679e9ec00b517ea4f75aeadc85bb.pack": "452b203f074530f22f45b91cafc30ab8",
".git/packed-refs": "723797cbc1d414315a815059d331823a",
".git/refs/heads/main": "118631b4b4981de56f23457c153dfe12",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "118631b4b4981de56f23457c153dfe12",
"assets/AssetManifest.json": "1b629ca3c1303783caaec616e621cf3c",
"assets/assets/images/lordOfRings.jpg": "12eb95b278b457d4a14304ba148036c7",
"assets/assets/images/spiderman.jpg": "312e2d580e70804e2936d2a7461b90d2",
"assets/assets/images/StreamFlash.png": "bde0ab22e7da7e7cf9f9f2642f63a887",
"assets/assets/images/StreamFlashC.png": "41063a10dcab892bb1b12870c6edd078",
"assets/assets/images/whowatch.jpg": "7fbc638b4cf69da9460f0b76bdc4e32e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "46c82abc2641620f2534cbc0fc462712",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "2225153a2df6b83273602cdcf76f18bb",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "f223977841473def5e7a7f7ab49488d8",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/favicon.ico": "32c7b78fa866976b389358836ab9f906",
"icons/Icon-192.png": "c7d2380f7702bb714d6a1628b72ed3fc",
"icons/Icon-512.png": "8417e11d72a2a88e579429e533bfb64b",
"icons/Icon-maskable-192.png": "c7d2380f7702bb714d6a1628b72ed3fc",
"icons/Icon-maskable-512.png": "8417e11d72a2a88e579429e533bfb64b",
"icons/icons/Icon-192.png": "c7d2380f7702bb714d6a1628b72ed3fc",
"icons/icons/Icon-512.png": "8417e11d72a2a88e579429e533bfb64b",
"icons/icons/Icon-maskable-192.png": "c7d2380f7702bb714d6a1628b72ed3fc",
"icons/icons/Icon-maskable-512.png": "8417e11d72a2a88e579429e533bfb64b",
"icons/index.html": "cd8f350b85c57c1d52cc97e01871387d",
"/": "af7715fca0522d44d5d129543837e36d",
"icons/manifest.json": "d7bfe9c70f839c1388245feee053817e",
"index.html": "af7715fca0522d44d5d129543837e36d",
"main.dart.js": "efcfed18557be73abc8ca461ac563127",
"manifest.json": "abb313be4ca56335c15a12809de0b8ca",
"version.json": "bfbc6a88b99a3e8b595f1054a5b69b47"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
