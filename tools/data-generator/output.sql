-- Langkah 1: Membersihkan semua data lama dari tabel
TRUNCATE TABLE public.order_items, public.orders, public.customers, public.products RESTART IDENTITY CASCADE;

-- Langkah 2: Memasukkan data Customers
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Mrs. Mona Howe', 'Aimee_Hauck@gmail.com', 'https://avatars.githubusercontent.com/u/56497453');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Mabel O''Reilly V', 'Desmond42@hotmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/31.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Olivia Mueller', 'Murl_Lesch69@gmail.com', 'https://avatars.githubusercontent.com/u/9788078');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Dennis Simonis PhD', 'Kitty_Thompson@hotmail.com', 'https://avatars.githubusercontent.com/u/24904195');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Willie Boyer', 'Ashly.Emmerich94@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/58.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Homer VonRueden', 'Keyon.Hudson98@gmail.com', 'https://avatars.githubusercontent.com/u/63524885');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Courtney Wyman V', 'Clare_Williamson97@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/32.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Betsy Kertzmann II', 'Noel69@yahoo.com', 'https://avatars.githubusercontent.com/u/70803290');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Amy Flatley', 'Waylon82@yahoo.com', 'https://avatars.githubusercontent.com/u/65416938');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Jamie Runolfsson', 'Asha_Conn@gmail.com', 'https://avatars.githubusercontent.com/u/57111599');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Jon Von', 'Bo_Leuschke1@gmail.com', 'https://avatars.githubusercontent.com/u/10856326');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Miss Lena Lockman', 'Lina88@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/87.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Raquel Sawayn', 'Simeon.Schneider35@hotmail.com', 'https://avatars.githubusercontent.com/u/50626232');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Herbert Ziemann IV', 'Tobin_Davis@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/14.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Ms. Blanca Frami', 'Lelia_Bergstrom@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/68.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Lauren Greenfelder', 'Eldon.Roberts92@yahoo.com', 'https://avatars.githubusercontent.com/u/36921958');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Ebony Terry', 'Adaline_Raynor-Brekke77@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/13.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Priscilla Rippin DVM', 'Allan14@yahoo.com', 'https://avatars.githubusercontent.com/u/79535637');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Erin Lockman', 'Gianni49@hotmail.com', 'https://avatars.githubusercontent.com/u/1549488');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Jeff Abbott', 'Ramon15@gmail.com', 'https://avatars.githubusercontent.com/u/32922492');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Yvonne Stoltenberg', 'Madyson.Waelchi@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/63.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Beulah Lang', 'Lonny_Heathcote57@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/96.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Carolyn Jones', 'Ali_Johnston@hotmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/34.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Santiago Reichert', 'Isadore_Johnson@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/22.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Darnell Franecki', 'Manley68@yahoo.com', 'https://avatars.githubusercontent.com/u/15258621');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Simon Schowalter', 'Fausto42@hotmail.com', 'https://avatars.githubusercontent.com/u/54382248');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Angie Hettinger', 'Mariane.Donnelly@yahoo.com', 'https://avatars.githubusercontent.com/u/84259294');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Monica Weber', 'Mafalda_Beahan68@gmail.com', 'https://avatars.githubusercontent.com/u/4035856');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Lynette Veum', 'Jannie_Farrell86@hotmail.com', 'https://avatars.githubusercontent.com/u/71506034');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Salvatore Gibson-Stracke', 'Ezekiel.Littel66@hotmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/17.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Ana Raynor', 'Louie48@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/46.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Angelo Lemke', 'Murphy.Pacocha@hotmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/28.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Ellen Fritsch', 'Sonia81@yahoo.com', 'https://avatars.githubusercontent.com/u/30666494');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Nina Rempel-Jacobi', 'Thaddeus_Reilly@gmail.com', 'https://avatars.githubusercontent.com/u/31758419');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Lauren Brekke', 'Marcelo_Rogahn@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/68.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Teri Grady-Flatley', 'Christina.Romaguera@gmail.com', 'https://avatars.githubusercontent.com/u/85996690');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Shawn Carroll III', 'Brendon38@hotmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/87.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Neal Watsica', 'Angeline_Stiedemann@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/93.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Dale Stoltenberg', 'Tracey15@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/59.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Jesse Gorczany MD', 'Ulises85@hotmail.com', 'https://avatars.githubusercontent.com/u/69763914');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Jessie Homenick', 'Carolyne_Armstrong72@yahoo.com', 'https://avatars.githubusercontent.com/u/61474633');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Della Ward', 'Ellis.Lubowitz74@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/24.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Viola Reichel PhD', 'Lilly_McLaughlin29@hotmail.com', 'https://avatars.githubusercontent.com/u/84317392');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Evelyn Hegmann', 'Modesta.Legros@yahoo.com', 'https://avatars.githubusercontent.com/u/66764429');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Pamela Ward DDS', 'Lauryn96@hotmail.com', 'https://avatars.githubusercontent.com/u/71484690');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Jan Schulist I', 'Harry_Smitham23@yahoo.com', 'https://avatars.githubusercontent.com/u/77976073');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Tracy Baumbach', 'Clifford_Heathcote@gmail.com', 'https://avatars.githubusercontent.com/u/68047532');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Bennie Cummerata', 'Jamey54@hotmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/51.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Stewart Huels', 'Clementine56@yahoo.com', 'https://avatars.githubusercontent.com/u/84937443');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Dr. Darrin O''Conner', 'Watson_Mayer73@hotmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/51.jpg');

-- Langkah 3: Memasukkan data Products
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Fresh Cotton Chair', 'The Hazle Fish is the latest in a series of complicated products from Cremin - Monahan', 1368878, 'https://loremflickr.com/1565/2563/technics?lock=4334516199792716');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Intelligent Granite Bacon', 'Innovative Chicken featuring fearless technology and Marble construction', 607418, 'https://loremflickr.com/3947/2459/technics?lock=5264653342371224');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Bespoke Plastic Car', 'Stylish Shoes designed to make you stand out with stiff looks', 1407588, 'https://loremflickr.com/519/892/technics?lock=5856249092488044');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Ergonomic Aluminum Towels', 'Innovative Chicken featuring second technology and Metal construction', 121859, 'https://loremflickr.com/2839/2891/technics?lock=7295607687927752');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Soft Plastic Chair', 'New Car model with 67 GB RAM, 268 GB storage, and mediocre features', 355269, 'https://loremflickr.com/3897/65/technics?lock=8247329288123078');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Recycled Plastic Ball', 'The sleek and marvelous Hat comes with plum LED lighting for smart functionality', 1265962, 'https://loremflickr.com/2435/573/technics?lock=2058575061430838');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Electronic Cotton Pants', 'Stylish Shoes designed to make you stand out with wide-eyed looks', 531862, 'https://loremflickr.com/2677/2501/technics?lock=3999893979082752');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Incredible Granite Soap', 'The Upgradable encompassing framework Bacon offers reliable performance and pushy design', 1048002, 'https://loremflickr.com/3857/921/technics?lock=8842511823568784');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Recycled Cotton Table', 'D''Amore, Volkman and Collier''s most advanced Mouse technology increases secondary capabilities', 1291352, 'https://loremflickr.com/429/2676/technics?lock=2029819184025511');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Fantastic Silk Bacon', 'Our fox-friendly Bacon ensures crazy comfort for your pets', 1378495, 'https://loremflickr.com/1132/1717/technics?lock=2968639048181012');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Handmade Bamboo Tuna', 'Innovative Soap featuring immaculate technology and Wooden construction', 305729, 'https://loremflickr.com/1603/3467/technics?lock=706441883984294');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Frozen Cotton Ball', 'Innovative Salad featuring round technology and Granite construction', 1311131, 'https://loremflickr.com/3772/3692/technics?lock=4579367088901392');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Fantastic Cotton Soap', 'Discover the busy new Pants with an exciting mix of Ceramic ingredients', 813213, 'https://loremflickr.com/3551/1527/technics?lock=6720345642937803');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Licensed Bronze Soap', 'Introducing the Fiji-inspired Shoes, blending earnest style with local craftsmanship', 1066418, 'https://loremflickr.com/1386/2655/technics?lock=4231172741119902');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Soft Wooden Shoes', 'Elegant Towels designed with Ceramic for amazing performance', 1034990, 'https://loremflickr.com/2674/71/technics?lock=3003039917480939');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Fantastic Bronze Chair', 'Introducing the Cote d''Ivoire-inspired Chair, blending formal style with local craftsmanship', 725366, 'https://loremflickr.com/450/610/technics?lock=3261404911717760');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Rustic Granite Keyboard', 'Professional-grade Shirt perfect for mushy training and recreational use', 132391, 'https://loremflickr.com/1618/208/technics?lock=5241032422885995');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Tasty Ceramic Gloves', 'Introducing the Paraguay-inspired Bike, blending dapper style with local craftsmanship', 907211, 'https://loremflickr.com/1347/1072/technics?lock=7592542707890245');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Tasty Steel Shirt', 'Innovative Tuna featuring woeful technology and Silk construction', 208200, 'https://loremflickr.com/2525/3585/technics?lock=2590576239358671');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Refined Metal Chicken', 'Fantastic Cheese designed with Steel for marvelous performance', 906726, 'https://loremflickr.com/21/2099/technics?lock=1312557685014033');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Fantastic Silk Bike', 'Our polar bear-friendly Sausages ensures sandy comfort for your pets', 859763, 'https://loremflickr.com/650/1676/technics?lock=8747744512353875');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Generic Marble Tuna', 'Our fluffy-inspired Table brings a taste of luxury to your naughty lifestyle', 452974, 'https://loremflickr.com/1134/739/technics?lock=7036321979608801');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Tasty Concrete Sausages', 'Wolff, Herzog and Mueller''s most advanced Fish technology increases dapper capabilities', 674574, 'https://loremflickr.com/3420/868/technics?lock=273908182726186');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Rustic Aluminum Pants', 'Innovative Gloves featuring yellowish technology and Cotton construction', 1174487, 'https://loremflickr.com/2063/1054/technics?lock=310165583952292');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Electronic Ceramic Shirt', 'Marvin, McGlynn and Renner''s most advanced Sausages technology increases narrow capabilities', 200694, 'https://loremflickr.com/2028/171/technics?lock=2648344748180748');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Frozen Silk Chair', 'Introducing the Finland-inspired Cheese, blending finished style with local craftsmanship', 1224953, 'https://loremflickr.com/466/922/technics?lock=8937435799296953');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Sleek Bamboo Towels', 'Stylish Salad designed to make you stand out with murky looks', 399102, 'https://loremflickr.com/1075/3308/technics?lock=8027760321413754');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Licensed Plastic Tuna', 'Discover the eagle-like agility of our Tuna, perfect for numb users', 282806, 'https://loremflickr.com/229/1086/technics?lock=1569527792214666');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Small Metal Chips', 'Discover the crocodile-like agility of our Soap, perfect for rare users', 64346, 'https://loremflickr.com/369/2305/technics?lock=3130317240953703');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Incredible Wooden Mouse', 'Sauer - Balistreri''s most advanced Mouse technology increases spherical capabilities', 205451, 'https://loremflickr.com/3452/2439/technics?lock=2164596384236823');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Bespoke Wooden Bacon', 'Ergonomic Shoes made with Plastic for all-day spiteful support', 1083558, 'https://loremflickr.com/2810/704/technics?lock=8663331718005685');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Oriental Rubber Bike', 'Stylish Cheese designed to make you stand out with shallow looks', 107086, 'https://loremflickr.com/3416/1012/technics?lock=1641488679831580');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Handmade Marble Car', 'Our sea lion-friendly Table ensures oddball comfort for your pets', 350678, 'https://loremflickr.com/2283/1784/technics?lock=5699624034818827');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Handmade Granite Chips', 'New azure Pizza with ergonomic design for dim comfort', 1392672, 'https://loremflickr.com/1671/1321/technics?lock=2776903983805317');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Rustic Marble Ball', 'Our eagle-friendly Bacon ensures qualified comfort for your pets', 438225, 'https://loremflickr.com/985/3646/technics?lock=8955744435904840');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Modern Silk Chicken', 'Pouros Group''s most advanced Pants technology increases squiggly capabilities', 1405523, 'https://loremflickr.com/3108/3777/technics?lock=3303190981584577');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Bespoke Plastic Hat', 'New Bacon model with 44 GB RAM, 932 GB storage, and squiggly features', 158396, 'https://loremflickr.com/2862/2316/technics?lock=2504275987124467');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Luxurious Aluminum Pants', 'Professional-grade Pizza perfect for uneven training and recreational use', 1432798, 'https://loremflickr.com/2256/260/technics?lock=3015661887470672');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Ergonomic Steel Salad', 'Discover the bear-like agility of our Sausages, perfect for naughty users', 640192, 'https://loremflickr.com/3539/3168/technics?lock=1194869438724381');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Incredible Steel Chair', 'Stylish Shoes designed to make you stand out with blank looks', 1447344, 'https://loremflickr.com/602/1522/technics?lock=7475035092845723');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Electronic Concrete Ball', 'Featuring Meitnerium-enhanced technology, our Fish offers unparalleled unknown performance', 1382583, 'https://loremflickr.com/3245/2803/technics?lock=1259221823159806');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Electronic Granite Keyboard', 'Our spicy-inspired Chair brings a taste of luxury to your meaty lifestyle', 922348, 'https://loremflickr.com/2173/3737/technics?lock=1954330470587096');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Modern Rubber Pizza', 'Discover the weighty new Chair with an exciting mix of Gold ingredients', 535338, 'https://loremflickr.com/250/2762/technics?lock=3073008865933525');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Recycled Bronze Computer', 'Our lion-friendly Chair ensures serpentine comfort for your pets', 722126, 'https://loremflickr.com/3184/1618/technics?lock=7240577745480184');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Electronic Silk Fish', 'The gold Salad combines Netherlands aesthetics with Hafnium-based durability', 449378, 'https://loremflickr.com/1203/519/technics?lock=8271989153736872');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Oriental Gold Cheese', 'Experience the azure brilliance of our Ball, perfect for empty environments', 958285, 'https://loremflickr.com/3841/2025/technics?lock=1579981616719061');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Small Steel Hat', 'Savor the delicious essence in our Table, designed for majestic culinary adventures', 1337224, 'https://loremflickr.com/1855/2068/technics?lock=5406386379461990');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Practical Steel Soap', 'Ergonomic Car made with Plastic for all-day excited support', 1416513, 'https://loremflickr.com/3798/889/technics?lock=5755767646058749');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Oriental Bamboo Bike', 'Discover the peacock-like agility of our Salad, perfect for shrill users', 1395783, 'https://loremflickr.com/1546/303/technics?lock=4783199226792647');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Gorgeous Silk Chicken', 'New Computer model with 55 GB RAM, 224 GB storage, and cheerful features', 696408, 'https://loremflickr.com/980/2531/technics?lock=6997417257401020');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Gorgeous Aluminum Shoes', 'Ergonomic Computer made with Metal for all-day wiggly support', 576652, 'https://loremflickr.com/2587/1120/technics?lock=5939004731575220');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Practical Ceramic Towels', 'The Dena Table is the latest in a series of impressionable products from O''Hara, Howell and Reichel', 566103, 'https://loremflickr.com/985/2312/technics?lock=2399549913927654');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Tasty Gold Shoes', 'Ergonomic Computer made with Granite for all-day thick support', 672754, 'https://loremflickr.com/482/2485/technics?lock=5869117691128729');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Handcrafted Gold Towels', 'Intelligent Cheese designed with Concrete for sizzling performance', 710170, 'https://loremflickr.com/2504/526/technics?lock=4403766072783567');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Handmade Wooden Shoes', 'New blue Shoes with ergonomic design for blank comfort', 754805, 'https://loremflickr.com/1387/3667/technics?lock=4460136110063122');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Sleek Marble Table', 'Kuhn Inc''s most advanced Chair technology increases velvety capabilities', 1414013, 'https://loremflickr.com/634/984/technics?lock=6983424271354164');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Tasty Bronze Chair', 'Experience the maroon brilliance of our Bacon, perfect for mean environments', 704936, 'https://loremflickr.com/3652/3463/technics?lock=169345435513739');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Bespoke Granite Towels', 'Discover the frog-like agility of our Car, perfect for brisk users', 937235, 'https://loremflickr.com/1869/1789/technics?lock=2020381532725153');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Handcrafted Bamboo Bacon', 'Watsica Group''s most advanced Chicken technology increases concerned capabilities', 903815, 'https://loremflickr.com/213/2379/technics?lock=3938332464493093');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Recycled Bamboo Shirt', 'The green Salad combines Taiwan aesthetics with Helium-based durability', 124398, 'https://loremflickr.com/465/2882/technics?lock=2967574157007871');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Luxurious Wooden Hat', 'Discover the shark-like agility of our Tuna, perfect for handsome users', 1286309, 'https://loremflickr.com/1638/2472/technics?lock=5120414704642490');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Licensed Marble Keyboard', 'New Bacon model with 31 GB RAM, 765 GB storage, and smooth features', 836624, 'https://loremflickr.com/2015/3292/technics?lock=5311066064306462');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Electronic Metal Gloves', 'Introducing the Greece-inspired Chips, blending far-off style with local craftsmanship', 445682, 'https://loremflickr.com/3428/1494/technics?lock=7740627832252669');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Rustic Concrete Hat', 'Our fluffy-inspired Bike brings a taste of luxury to your prime lifestyle', 316565, 'https://loremflickr.com/3309/204/technics?lock=6355315008914961');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Practical Steel Hat', 'Luxurious Mouse designed with Aluminum for baggy performance', 469655, 'https://loremflickr.com/415/3272/technics?lock=4196491332023820');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Handmade Cotton Tuna', 'New Computer model with 53 GB RAM, 935 GB storage, and hoarse features', 300222, 'https://loremflickr.com/1859/3878/technics?lock=1392186029377466');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Bespoke Concrete Fish', 'Our tangy-inspired Soap brings a taste of luxury to your raw lifestyle', 1383269, 'https://loremflickr.com/3384/3065/technics?lock=5187843887046657');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Practical Rubber Chair', 'Experience the violet brilliance of our Cheese, perfect for frightened environments', 1398490, 'https://loremflickr.com/1269/1648/technics?lock=6298351359423388');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Rustic Steel Table', 'Ergonomic Shirt made with Cotton for all-day whirlwind support', 1310892, 'https://loremflickr.com/3851/2280/technics?lock=1943962249105429');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Recycled Bamboo Pizza', 'Recycled Sausages designed with Marble for edible performance', 479502, 'https://loremflickr.com/1499/393/technics?lock=6449434570436111');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Ergonomic Granite Pizza', 'Innovative Table featuring lovable technology and Rubber construction', 662925, 'https://loremflickr.com/2388/3037/technics?lock=2971380150225800');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Unbranded Cotton Bike', 'Ergonomic Towels made with Ceramic for all-day enlightened support', 1158608, 'https://loremflickr.com/355/250/technics?lock=6178160463161423');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Tasty Silk Computer', 'Experience the red brilliance of our Shirt, perfect for tedious environments', 580851, 'https://loremflickr.com/2339/3047/technics?lock=8011507529455676');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Fantastic Wooden Table', 'Savor the zesty essence in our Car, designed for grounded culinary adventures', 394589, 'https://loremflickr.com/3415/1777/technics?lock=6828622373474169');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Small Steel Car', 'The Reverse-engineered contextually-based encryption Bacon offers reliable performance and tricky design', 60918, 'https://loremflickr.com/75/3403/technics?lock=5923364614038557');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Tasty Silk Ball', 'Heathcote - Tillman''s most advanced Chair technology increases old-fashioned capabilities', 1489346, 'https://loremflickr.com/1608/3517/technics?lock=6687774645376943');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Handcrafted Steel Hat', 'Ergonomic Chair made with Plastic for all-day stained support', 343224, 'https://loremflickr.com/845/2848/technics?lock=6921765871902457');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Fantastic Bamboo Keyboard', 'Friesen Group''s most advanced Pants technology increases aggressive capabilities', 1295370, 'https://loremflickr.com/863/1442/technics?lock=332687972918406');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Handcrafted Silk Shoes', 'Our sour-inspired Ball brings a taste of luxury to your uneven lifestyle', 881094, 'https://loremflickr.com/1960/851/technics?lock=6111343800586761');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Luxurious Steel Shoes', 'Our spicy-inspired Shoes brings a taste of luxury to your mushy lifestyle', 1128287, 'https://loremflickr.com/83/734/technics?lock=6522507936806706');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Fantastic Steel Chicken', 'New Hat model with 11 GB RAM, 323 GB storage, and golden features', 957373, 'https://loremflickr.com/1574/3028/technics?lock=8860515630124468');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Elegant Steel Tuna', 'Larkin LLC''s most advanced Gloves technology increases rotating capabilities', 321273, 'https://loremflickr.com/1006/3102/technics?lock=8225917035240388');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Fresh Wooden Pizza', 'New maroon Car with ergonomic design for flawless comfort', 293857, 'https://loremflickr.com/2394/3162/technics?lock=2653444318055443');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Soft Metal Tuna', 'Our zebra-friendly Pizza ensures nice comfort for your pets', 863097, 'https://loremflickr.com/3371/3999/technics?lock=701785640684992');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Soft Wooden Soap', 'Savor the spicy essence in our Sausages, designed for impure culinary adventures', 66643, 'https://loremflickr.com/1973/773/technics?lock=314362855838192');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Frozen Silk Cheese', 'Discover the kangaroo-like agility of our Salad, perfect for monumental users', 1064966, 'https://loremflickr.com/2829/3920/technics?lock=5569809989252757');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Intelligent Ceramic Towels', 'Innovative Ball featuring great technology and Cotton construction', 996082, 'https://loremflickr.com/1466/2744/technics?lock=8160008604602832');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Luxurious Ceramic Car', 'Professional-grade Cheese perfect for frilly training and recreational use', 1133161, 'https://loremflickr.com/2938/2908/technics?lock=8482221346434040');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Oriental Gold Chicken', 'The turquoise Chips combines Eritrea aesthetics with Zirconium-based durability', 976783, 'https://loremflickr.com/2061/1016/technics?lock=2482884282665227');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Awesome Gold Soap', 'Our cow-friendly Computer ensures clear comfort for your pets', 1031746, 'https://loremflickr.com/1974/3578/technics?lock=1900884117768010');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Intelligent Granite Towels', 'New Bacon model with 52 GB RAM, 843 GB storage, and focused features', 977337, 'https://loremflickr.com/3961/3038/technics?lock=536428475323938');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Luxurious Granite Towels', 'Experience the purple brilliance of our Pizza, perfect for fruitful environments', 1077618, 'https://loremflickr.com/2224/1120/technics?lock=3923241383174585');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Ergonomic Plastic Sausages', 'New Shoes model with 12 GB RAM, 814 GB storage, and ashamed features', 1117077, 'https://loremflickr.com/3284/869/technics?lock=7182478842906113');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Recycled Bamboo Mouse', 'New yellow Car with ergonomic design for posh comfort', 71321, 'https://loremflickr.com/1469/3110/technics?lock=1206809977844128');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Soft Silk Pants', 'Introducing the Somalia-inspired Chips, blending glaring style with local craftsmanship', 1063420, 'https://loremflickr.com/3735/2360/technics?lock=4701970702430807');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Generic Silk Tuna', 'Stylish Fish designed to make you stand out with unused looks', 839853, 'https://loremflickr.com/749/3613/technics?lock=8366490436067542');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Handmade Wooden Mouse', 'New plum Computer with ergonomic design for taut comfort', 151092, 'https://loremflickr.com/1054/3555/technics?lock=5644342955501945');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Generic Marble Gloves', 'Tasty Table designed with Ceramic for quick performance', 557926, 'https://loremflickr.com/1079/2397/technics?lock=3294024023566357');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Handmade Bamboo Salad', 'New Salad model with 74 GB RAM, 90 GB storage, and ruddy features', 729441, 'https://loremflickr.com/3622/3697/technics?lock=5710354356285162');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Sleek Granite Salad', 'Savor the sweet essence in our Fish, designed for perky culinary adventures', 1039578, 'https://loremflickr.com/3067/356/technics?lock=8111633767800780');


-- Langkah 4: Membuat data Orders dan OrderItems secara acak dengan logika yang benar
DO $$
DECLARE
    i INT;
    random_customer_id UUID;
    order_id_var UUID;
    num_items INT;
    total_cents INT;
    order_created_at TIMESTAMP;
    -- Variabel untuk menampung satu baris produk (termasuk id dan harga)
    product_record RECORD;
BEGIN
    FOR i IN 1..250 LOOP
        SELECT id INTO random_customer_id FROM public.customers ORDER BY random() LIMIT 1;
        
        order_created_at := NOW() - (random() * interval '365 days');

        INSERT INTO public.orders ("totalInCents", status, "customerId", "createdAt")
        VALUES (0, (ARRAY['PENDING', 'PROCESSING', 'DELIVERED', 'CANCELLED'])[floor(random() * 4) + 1]::"OrderStatus", random_customer_id, order_created_at)
        RETURNING id INTO order_id_var;
        
        num_items := floor(random() * 5) + 1;
        total_cents := 0;
        
        -- PERBAIKAN LOGIKA:
        -- Dapatkan BEBERAPA produk unik SEKALIGUS, dan loop melalui hasil tersebut.
        -- Ini menjamin tidak akan ada produk duplikat dalam satu pesanan.
        FOR product_record IN 
            SELECT id, "priceInCents" FROM public.products ORDER BY random() LIMIT num_items
        LOOP
            INSERT INTO public.order_items (quantity, "priceInCents", "orderId", "productId")
            VALUES (1, product_record."priceInCents", order_id_var, product_record.id);
            
            total_cents := total_cents + product_record."priceInCents";
        END LOOP;
        
        UPDATE public.orders SET "totalInCents" = total_cents WHERE id = order_id_var;
        
    END LOOP;
END $$;
