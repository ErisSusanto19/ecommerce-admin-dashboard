-- Langkah 1: Membersihkan semua data lama dari tabel
TRUNCATE TABLE public.order_items, public.orders, public.customers, public.products RESTART IDENTITY CASCADE;

-- Langkah 2: Memasukkan data Customers
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Eduardo Dicki', 'Jadon_Rogahn@yahoo.com', 'https://avatars.githubusercontent.com/u/42176018');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Bradley Boyer', 'Monique36@hotmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/62.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Lorraine Hirthe-Schamberger', 'Allene_Morar@hotmail.com', 'https://avatars.githubusercontent.com/u/92222160');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Molly Lemke', 'Greta_Hermann21@yahoo.com', 'https://avatars.githubusercontent.com/u/76911565');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Freda Jast', 'Treva_Weimann@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/8.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Randy Harvey DDS', 'Lexi_Hermiston66@gmail.com', 'https://avatars.githubusercontent.com/u/87495431');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Lynn Morissette', 'Brenna50@hotmail.com', 'https://avatars.githubusercontent.com/u/17088622');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Molly Bernier', 'Berneice.Lemke24@gmail.com', 'https://avatars.githubusercontent.com/u/66502966');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Winston Wintheiser', 'Nakia.Jaskolski10@gmail.com', 'https://avatars.githubusercontent.com/u/76842701');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Dave Rippin', 'Stefanie88@gmail.com', 'https://avatars.githubusercontent.com/u/14258402');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Linda Hahn', 'Eldridge_MacGyver@yahoo.com', 'https://avatars.githubusercontent.com/u/32816796');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Gabriel Rempel', 'Jennifer.Hessel56@hotmail.com', 'https://avatars.githubusercontent.com/u/83847839');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Rodolfo Weber', 'Vergie70@hotmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/77.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Antoinette Douglas', 'Catalina29@yahoo.com', 'https://avatars.githubusercontent.com/u/41481056');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Marianne Stark', 'Willard.Gerhold@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/64.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Bruce Kovacek', 'Krystel28@yahoo.com', 'https://avatars.githubusercontent.com/u/91065782');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Mrs. Rosa Bauch', 'Adele_McLaughlin99@hotmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/26.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Miss Dora Schaden', 'Kallie73@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/15.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Dr. Angelo Hoppe', 'Rick_Jacobs@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/72.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Bernadette Bednar', 'Kyra.Schimmel68@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/51.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Cecelia Ullrich', 'Collin.Cummings-Wiegand82@hotmail.com', 'https://avatars.githubusercontent.com/u/44773344');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Kerry Morissette', 'Cheyanne48@gmail.com', 'https://avatars.githubusercontent.com/u/69765801');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Tammy Thompson', 'Edd79@hotmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/61.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Julian Sipes', 'Kaitlyn91@hotmail.com', 'https://avatars.githubusercontent.com/u/99295998');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Dr. Anna Pfeffer', 'Lelah.Jerde@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/54.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Shelia Bauch', 'Aubrey_Bailey@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/27.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Mildred Ritchie', 'Hayley.Wehner@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/3.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Nicolas Roob', 'Dimitri92@hotmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/6.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Guadalupe Upton', 'Edison57@hotmail.com', 'https://avatars.githubusercontent.com/u/19667726');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Hugo Kerluke', 'Tomasa_Prosacco@yahoo.com', 'https://avatars.githubusercontent.com/u/21021322');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Elvira Miller', 'Mayra_DAmore@hotmail.com', 'https://avatars.githubusercontent.com/u/73092592');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Lynette Schowalter-Reilly', 'Noah.Gleason@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/93.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Dr. Levi Reilly', 'Dillan_Bailey1@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/9.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Conrad Reilly', 'Walker_Franecki79@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/39.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Jackie Zboncak', 'Jeremy.Huel@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/83.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Jared Franey', 'Santina.Emmerich-Kozey@yahoo.com', 'https://avatars.githubusercontent.com/u/19039134');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Marie Jenkins', 'Mikayla32@hotmail.com', 'https://avatars.githubusercontent.com/u/77959015');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Tim Yost', 'Abdiel.Beahan62@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/22.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Celia Nolan', 'Emelia.Schneider21@yahoo.com', 'https://avatars.githubusercontent.com/u/83346535');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Mr. Mathew Kassulke', 'Akeem_Kuphal@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/25.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Bennie Konopelski MD', 'Breanna27@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/66.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Alvin Heathcote', 'Elijah.Rohan@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/27.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Aubrey Vandervort', 'Remington_Roberts@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/20.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Mrs. Edna Hilll', 'Anthony_Brown15@yahoo.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/2.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Gilbert Bednar PhD', 'Amelia.Gislason@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/7.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Alonzo Trantow III', 'Adeline27@hotmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/85.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Dr. Sean Gislason', 'Timmy.Nienow@hotmail.com', 'https://avatars.githubusercontent.com/u/54232127');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Antonia Koelpin', 'Erica_Swaniawski95@hotmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/56.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Ronald Mills', 'Euna_Rosenbaum@hotmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/40.jpg');
INSERT INTO public.customers (name, email, "avatarUrl") VALUES ('Melissa Moen', 'Ettie_Steuber@gmail.com', 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/67.jpg');

-- Langkah 3: Memasukkan data Products
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Rustic Bronze Sausages', 'Our spicy-inspired Chicken brings a taste of luxury to your flickering lifestyle', 3299, 'https://loremflickr.com/2221/1082/technics?lock=5437528831032219');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Intelligent Marble Tuna', 'Our butterfly-friendly Sausages ensures candid comfort for your pets', 44848, 'https://loremflickr.com/2374/2353/technics?lock=6487045838040487');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Rustic Aluminum Keyboard', 'New Ball model with 27 GB RAM, 249 GB storage, and definitive features', 49888, 'https://loremflickr.com/2337/498/technics?lock=6771869232224867');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Tasty Bronze Pizza', 'Our moist-inspired Fish brings a taste of luxury to your suburban lifestyle', 13756, 'https://loremflickr.com/3339/2502/technics?lock=2971608645190580');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Handmade Plastic Towels', 'New Shoes model with 25 GB RAM, 225 GB storage, and clumsy features', 5679, 'https://loremflickr.com/671/2605/technics?lock=8909345176449996');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Intelligent Steel Shirt', 'The mint green Shirt combines Tanzania aesthetics with Sodium-based durability', 17455, 'https://loremflickr.com/3273/528/technics?lock=2052907731279943');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Modern Aluminum Soap', 'The Face to face bifurcated system engine Pizza offers reliable performance and faint design', 36200, 'https://loremflickr.com/2707/2838/technics?lock=7302050788956911');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Incredible Concrete Computer', 'Schulist, Altenwerth and Abernathy''s most advanced Pizza technology increases willing capabilities', 44494, 'https://loremflickr.com/1404/3706/technics?lock=6450597070695119');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Ergonomic Steel Chicken', 'Ergonomic Pizza made with Aluminum for all-day delectable support', 47646, 'https://loremflickr.com/799/2171/technics?lock=609366839353014');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Electronic Plastic Pizza', 'New Chips model with 37 GB RAM, 861 GB storage, and frail features', 11214, 'https://loremflickr.com/3303/718/technics?lock=4968371004093066');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Soft Plastic Soap', 'Our salty-inspired Computer brings a taste of luxury to your complicated lifestyle', 41156, 'https://loremflickr.com/882/2930/technics?lock=2547993963863817');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Sleek Aluminum Soap', 'Innovative Sausages featuring acclaimed technology and Cotton construction', 37926, 'https://loremflickr.com/3063/309/technics?lock=3555871907705773');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Practical Wooden Ball', 'Discover the scornful new Ball with an exciting mix of Silk ingredients', 37144, 'https://loremflickr.com/2891/1080/technics?lock=2648051139962153');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Incredible Rubber Bike', 'Innovative Gloves featuring legal technology and Steel construction', 47818, 'https://loremflickr.com/858/421/technics?lock=2701422988163848');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Incredible Wooden Bacon', 'Experience the black brilliance of our Pizza, perfect for better environments', 37050, 'https://loremflickr.com/1501/1310/technics?lock=5086421265310750');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Sleek Concrete Chicken', 'The Triple-buffered secondary adapter Ball offers reliable performance and flickering design', 41886, 'https://loremflickr.com/784/240/technics?lock=5868129901168569');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Generic Metal Pants', 'New magenta Fish with ergonomic design for digital comfort', 48858, 'https://loremflickr.com/3548/3041/technics?lock=206380288857525');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Sleek Gold Shirt', 'The sleek and flawed Cheese comes with plum LED lighting for smart functionality', 46942, 'https://loremflickr.com/3106/3079/technics?lock=5833888979569430');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Handcrafted Steel Cheese', 'Introducing the Northern Mariana Islands-inspired Fish, blending athletic style with local craftsmanship', 11872, 'https://loremflickr.com/78/182/technics?lock=5831456581230703');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Bespoke Marble Ball', 'Kub - Oberbrunner''s most advanced Soap technology increases coordinated capabilities', 33321, 'https://loremflickr.com/3837/3986/technics?lock=2496914772367104');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Ergonomic Rubber Chips', 'Featuring Caesium-enhanced technology, our Gloves offers unparalleled trained performance', 7885, 'https://loremflickr.com/1977/2428/technics?lock=8470190537533966');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Awesome Wooden Soap', 'Innovative Shirt featuring agitated technology and Rubber construction', 31742, 'https://loremflickr.com/3471/3004/technics?lock=5542108152844138');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Frozen Wooden Soap', 'New salmon Bacon with ergonomic design for long comfort', 3675, 'https://loremflickr.com/1417/745/technics?lock=2762501620340329');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Unbranded Silk Chicken', 'Savor the delicious essence in our Keyboard, designed for wiggly culinary adventures', 13641, 'https://loremflickr.com/1673/2933/technics?lock=8930599525446085');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Electronic Cotton Hat', 'Our shark-friendly Mouse ensures homely comfort for your pets', 18944, 'https://loremflickr.com/3088/3697/technics?lock=45966838777541');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Gorgeous Plastic Sausages', 'New Chips model with 71 GB RAM, 242 GB storage, and curly features', 11065, 'https://loremflickr.com/1942/3820/technics?lock=667553649868544');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Modern Steel Tuna', 'The Focused AI-powered benchmark Fish offers reliable performance and wicked design', 41435, 'https://loremflickr.com/3586/3697/technics?lock=8435309848993067');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Fresh Gold Bacon', 'New Shoes model with 17 GB RAM, 764 GB storage, and smoggy features', 10034, 'https://loremflickr.com/611/2601/technics?lock=2503439161303839');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Sleek Rubber Bike', 'Our gorilla-friendly Bacon ensures obedient comfort for your pets', 2545, 'https://loremflickr.com/2589/1996/technics?lock=1080302852372442');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Modern Aluminum Chair', 'Ergonomic Tuna made with Granite for all-day responsible support', 46377, 'https://loremflickr.com/3638/3729/technics?lock=538214599366592');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Fresh Gold Car', 'Discover the monkey-like agility of our Ball, perfect for kaleidoscopic users', 10021, 'https://loremflickr.com/899/8/technics?lock=4325577157592174');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Modern Wooden Table', 'Handmade Mouse designed with Gold for easy performance', 38360, 'https://loremflickr.com/2726/1534/technics?lock=668918421729128');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Refined Silk Computer', 'The Vena Pizza is the latest in a series of delirious products from Brown, Stiedemann and Fay', 10044, 'https://loremflickr.com/1249/1928/technics?lock=5151542753409207');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Electronic Aluminum Fish', 'Ergonomic Gloves made with Marble for all-day actual support', 3273, 'https://loremflickr.com/2374/2525/technics?lock=6573724227674509');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Small Gold Gloves', 'Brakus, Walker and Parisian''s most advanced Hat technology increases blushing capabilities', 15367, 'https://loremflickr.com/3097/439/technics?lock=7286250619556235');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Handmade Metal Mouse', 'The sleek and our Pants comes with salmon LED lighting for smart functionality', 17348, 'https://loremflickr.com/299/3016/technics?lock=2951030594037813');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Bespoke Steel Pants', 'Our sweet-inspired Shoes brings a taste of luxury to your boring lifestyle', 6136, 'https://loremflickr.com/1750/2441/technics?lock=7200450023439967');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Soft Granite Fish', 'Experience the turquoise brilliance of our Table, perfect for any environments', 35609, 'https://loremflickr.com/1270/2285/technics?lock=5456615119179532');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Recycled Aluminum Hat', 'Featuring Scandium-enhanced technology, our Table offers unparalleled deadly performance', 35880, 'https://loremflickr.com/3896/969/technics?lock=7325481162880653');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Awesome Wooden Fish', 'The Ray Chair is the latest in a series of frank products from Grady, Mueller and Littel', 33292, 'https://loremflickr.com/2074/2995/technics?lock=3594737115024459');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Oriental Metal Chair', 'Professional-grade Chair perfect for lavish training and recreational use', 29454, 'https://loremflickr.com/690/1578/technics?lock=7399027212367570');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Awesome Bronze Car', 'Experience the indigo brilliance of our Sausages, perfect for useless environments', 37283, 'https://loremflickr.com/2889/2348/technics?lock=5291949955173309');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Oriental Aluminum Chips', 'The Optional value-added data-warehouse Keyboard offers reliable performance and perky design', 29796, 'https://loremflickr.com/710/1370/technics?lock=7046605022610186');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Bespoke Bronze Sausages', 'Introducing the Serbia-inspired Cheese, blending steep style with local craftsmanship', 29052, 'https://loremflickr.com/317/304/technics?lock=320904148512302');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Recycled Bronze Car', 'Discover the rhinoceros-like agility of our Chips, perfect for delicious users', 17531, 'https://loremflickr.com/1328/1015/technics?lock=1541461328518294');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Luxurious Rubber Hat', 'The Jaqueline Bacon is the latest in a series of soulful products from Blick and Sons', 49179, 'https://loremflickr.com/3646/2742/technics?lock=6101319536549547');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Soft Rubber Bike', 'The sleek and glass Shoes comes with ivory LED lighting for smart functionality', 4690, 'https://loremflickr.com/1588/271/technics?lock=8573293297141510');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Incredible Bamboo Pizza', 'Fresh Fish designed with Steel for angelic performance', 38025, 'https://loremflickr.com/3546/3604/technics?lock=7658502777737799');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Generic Ceramic Salad', 'The Braeden Computer is the latest in a series of snarling products from Murazik - Dickinson', 44591, 'https://loremflickr.com/1452/669/technics?lock=5264091468068409');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Refined Marble Fish', 'The sleek and insistent Gloves comes with purple LED lighting for smart functionality', 35313, 'https://loremflickr.com/2651/3177/technics?lock=1951526020817295');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Oriental Rubber Table', 'Ergonomic Chips made with Bamboo for all-day radiant support', 25159, 'https://loremflickr.com/2613/1957/technics?lock=7061889479663426');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Small Gold Soap', 'Savor the rich essence in our Tuna, designed for abandoned culinary adventures', 26651, 'https://loremflickr.com/2325/3636/technics?lock=1736636088469246');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Elegant Granite Chips', 'The Deja Chair is the latest in a series of warlike products from Parker and Sons', 42486, 'https://loremflickr.com/2262/918/technics?lock=3664483311947008');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Frozen Ceramic Shirt', 'Introducing the Algeria-inspired Chips, blending husky style with local craftsmanship', 9097, 'https://loremflickr.com/3599/553/technics?lock=924783577472736');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Sleek Concrete Mouse', 'The sleek and staid Chips comes with azure LED lighting for smart functionality', 28889, 'https://loremflickr.com/659/313/technics?lock=7039042482184768');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Modern Gold Keyboard', 'Featuring Osmium-enhanced technology, our Computer offers unparalleled jam-packed performance', 34186, 'https://loremflickr.com/1581/1120/technics?lock=3948217570277826');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Handmade Ceramic Pizza', 'The Janet Table is the latest in a series of political products from Herzog - Lowe', 31849, 'https://loremflickr.com/3330/3827/technics?lock=6030947820019234');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Electronic Concrete Computer', 'Discover the cavernous new Shoes with an exciting mix of Cotton ingredients', 36675, 'https://loremflickr.com/2287/3168/technics?lock=9004565961619689');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Small Plastic Keyboard', 'The Theodora Gloves is the latest in a series of ironclad products from Goldner - Gutmann', 22922, 'https://loremflickr.com/668/349/technics?lock=8556607829686585');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Bespoke Silk Chicken', 'The black Towels combines Aruba aesthetics with Einsteinium-based durability', 44679, 'https://loremflickr.com/744/1973/technics?lock=1641165257490583');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Generic Metal Pizza', 'Stylish Towels designed to make you stand out with velvety looks', 34920, 'https://loremflickr.com/47/2007/technics?lock=5793938285439021');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Incredible Silk Table', 'Featuring Samarium-enhanced technology, our Shirt offers unparalleled shiny performance', 37155, 'https://loremflickr.com/3674/860/technics?lock=6958392073036118');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Frozen Rubber Soap', 'Professional-grade Pizza perfect for meaty training and recreational use', 20933, 'https://loremflickr.com/440/2620/technics?lock=8763343824027749');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Awesome Rubber Soap', 'Rodriguez - Gleason''s most advanced Salad technology increases inferior capabilities', 19514, 'https://loremflickr.com/367/862/technics?lock=5715761102145038');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Small Marble Keyboard', 'The sleek and unsightly Shirt comes with silver LED lighting for smart functionality', 36673, 'https://loremflickr.com/2207/753/technics?lock=6386231187979420');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Elegant Ceramic Salad', 'Leuschke, King and Conn''s most advanced Shirt technology increases other capabilities', 9363, 'https://loremflickr.com/1779/2075/technics?lock=8390112074701237');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Soft Ceramic Shoes', 'Our penguin-friendly Chicken ensures rotating comfort for your pets', 10039, 'https://loremflickr.com/1406/1115/technics?lock=8926100902686560');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Unbranded Ceramic Hat', 'Innovative Tuna featuring scientific technology and Gold construction', 5256, 'https://loremflickr.com/3194/3285/technics?lock=2582068080876907');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Generic Rubber Pizza', 'Professional-grade Shoes perfect for hospitable training and recreational use', 19303, 'https://loremflickr.com/583/3065/technics?lock=2681737556054881');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Sleek Granite Towels', 'Savor the golden essence in our Chips, designed for unsteady culinary adventures', 42471, 'https://loremflickr.com/1711/3901/technics?lock=8453353061163495');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Bespoke Bronze Pizza', 'The turquoise Chair combines Liberia aesthetics with Iodine-based durability', 48504, 'https://loremflickr.com/3688/214/technics?lock=506335249855055');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Licensed Gold Shirt', 'Innovative Computer featuring distinct technology and Metal construction', 7321, 'https://loremflickr.com/3750/232/technics?lock=4803398759047340');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Soft Bamboo Fish', 'Introducing the Oman-inspired Pizza, blending idealistic style with local craftsmanship', 2260, 'https://loremflickr.com/3820/3815/technics?lock=5251455156540444');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Intelligent Concrete Bike', 'Stylish Shirt designed to make you stand out with useless looks', 14696, 'https://loremflickr.com/1962/1719/technics?lock=2139218920189842');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Practical Aluminum Sausages', 'New Hat model with 29 GB RAM, 618 GB storage, and well-documented features', 23886, 'https://loremflickr.com/1384/502/technics?lock=7782306447699154');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Awesome Silk Pants', 'The Total dedicated hierarchy Pizza offers reliable performance and dark design', 4782, 'https://loremflickr.com/1670/2687/technics?lock=5744086263822255');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Tasty Aluminum Chicken', 'Discover the dolphin-like agility of our Shoes, perfect for shallow users', 44994, 'https://loremflickr.com/533/3253/technics?lock=8767273912805750');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Fantastic Plastic Shoes', 'New Hat model with 14 GB RAM, 914 GB storage, and silver features', 33503, 'https://loremflickr.com/2227/938/technics?lock=7055105357796505');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Recycled Bronze Pizza', 'Discover the zebra-like agility of our Salad, perfect for bleak users', 13137, 'https://loremflickr.com/206/2911/technics?lock=887459120382390');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Intelligent Aluminum Pants', 'The sleek and usable Pizza comes with lavender LED lighting for smart functionality', 10815, 'https://loremflickr.com/3139/2083/technics?lock=2930503060446261');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Modern Bamboo Chips', 'Introducing the New Zealand-inspired Chips, blending oblong style with local craftsmanship', 38203, 'https://loremflickr.com/1936/1034/technics?lock=1291289853526992');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Gorgeous Gold Towels', 'Experience the turquoise brilliance of our Shoes, perfect for dual environments', 15549, 'https://loremflickr.com/941/1679/technics?lock=7235588471690778');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Gorgeous Marble Pizza', 'Awesome Chicken designed with Marble for wise performance', 22895, 'https://loremflickr.com/1224/3808/technics?lock=7967556138744199');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Licensed Steel Salad', 'Discover the cow-like agility of our Ball, perfect for excited users', 38971, 'https://loremflickr.com/484/2350/technics?lock=6859149909876642');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Soft Silk Chips', 'The indigo Gloves combines Romania aesthetics with Erbium-based durability', 11689, 'https://loremflickr.com/1435/2666/technics?lock=2831024301227007');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Oriental Steel Table', 'Licensed Ball designed with Cotton for potable performance', 27641, 'https://loremflickr.com/549/3755/technics?lock=2392389860998498');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Oriental Steel Chips', 'Ergonomic Bacon made with Plastic for all-day closed support', 36003, 'https://loremflickr.com/1408/3136/technics?lock=4170607823387375');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Incredible Granite Bacon', 'The fuchsia Pizza combines British Indian Ocean Territory (Chagos Archipelago) aesthetics with Potassium-based durability', 21525, 'https://loremflickr.com/3702/3910/technics?lock=4142527904327745');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Ergonomic Aluminum Mouse', 'Experience the maroon brilliance of our Tuna, perfect for ethical environments', 11595, 'https://loremflickr.com/3423/1279/technics?lock=1124473411637845');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Generic Bronze Chicken', 'Our moist-inspired Keyboard brings a taste of luxury to your deserted lifestyle', 11319, 'https://loremflickr.com/3143/3506/technics?lock=8640592051087556');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Gorgeous Ceramic Mouse', 'The grey Chicken combines Anguilla aesthetics with Gallium-based durability', 29112, 'https://loremflickr.com/3719/2010/technics?lock=7152141194374568');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Intelligent Wooden Towels', 'The teal Ball combines Israel aesthetics with Plutonium-based durability', 21477, 'https://loremflickr.com/714/1666/technics?lock=6381696460853486');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Oriental Concrete Keyboard', 'Ergonomic Car made with Bamboo for all-day nippy support', 28183, 'https://loremflickr.com/2824/3931/technics?lock=5985523508253254');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Practical Concrete Chicken', 'The sleek and good-natured Shoes comes with gold LED lighting for smart functionality', 14832, 'https://loremflickr.com/3717/1191/technics?lock=8401476510013550');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Bespoke Ceramic Towels', 'Savor the savory essence in our Ball, designed for dutiful culinary adventures', 20617, 'https://loremflickr.com/3115/3013/technics?lock=2957337127728037');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Soft Silk Soap', 'Discover the rhinoceros-like agility of our Bike, perfect for excellent users', 20837, 'https://loremflickr.com/2925/3808/technics?lock=1549569603977150');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Intelligent Silk Mouse', 'Introducing the Georgia-inspired Shirt, blending impractical style with local craftsmanship', 37514, 'https://loremflickr.com/2956/2008/technics?lock=295226034291414');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Intelligent Silk Keyboard', 'The ivory Sausages combines Djibouti aesthetics with Mendelevium-based durability', 46422, 'https://loremflickr.com/1410/378/technics?lock=7423700483738428');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Fresh Bronze Ball', 'Professional-grade Towels perfect for simple training and recreational use', 28684, 'https://loremflickr.com/3936/2861/technics?lock=7219542199722992');
INSERT INTO public.products (name, description, "priceInCents", "imageUrl") VALUES ('Oriental Rubber Soap', 'Incredible Cheese designed with Aluminum for wordy performance', 11631, 'https://loremflickr.com/2631/632/technics?lock=2552180497746803');


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
