const sqlite3 = require('../modules/DbConnection');
const db = sqlite3().getInstance;

const users = [
	{name: "Nike Air Zoom Pegasus 35", price: "120.36", image: "images/shoes01.jpg", amount: 10, category_id: 1, description: "The Nike Air Zoom Pegasus 35 Shield Water-Repellent gets remixed to conquer wet routes. A water-repellent upper combines with an outsole that gives optimal grip on wet surfaces – letting you run in confidence despite the weather."},
	{name: "Nike Odyssey React", price: "225.50", image: "images/shoes02.jpg", amount: 15, category_id: 1, description: "The Nike Epic React Flyknit Men's Running Shoe provides crazy comfort that lasts as long as you can run. Its Nike React foam cushioning is responsive yet lightweight, durable yet soft. This attraction of opposites creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too."},
	{name: "Nike Air Zoom Structure 22", price: "299.99", image: "images/shoes03.jpg", amount: 4, category_id: 2, description: "The Nike Air Zoom Structure 22 Shield Water-Repellent gets remixed to conquer wet routes. A water-repellent upper sits atop supportive cushioning, while the outsole provides optimal grip on wet surfaces."},
	{name: "Nike Free RN 2018", price: "300.99", image: "images/shoes04.jpg", amount: 24, category_id: 2, description: "The Nike Free RN 2018 has been updated to deliver an even more dynamic feel. Stretch material in the upper moves with your foot, while a flexible outsole pattern adjusts to your every step. It's a ride that gives support and cushioning just where you need it."},
	{name: "Nike VaporFly 4% Flyknit", price: "405.99", image: "images/shoes05.jpg", amount: 2, category_id: 2, description: "Nike's fastest, most efficient marathon shoe just keeps winning everything in sight, as Shalane Flanagan (New York), Galen Rupp (Chicago), Edna Kiplagat (Boston) and Eliud Kipchoge (London, Berlin, Breaking2), can attest. With its ultra-light, uber-responsive ZoomX foam and a carbon fiber plate that feels like it’s propelling you forward, the VaporFly 4% is ready to push you to victories both large and small."},
	{name: "Nike Zoom Fly SP", price: "180.10", image: "images/shoes06.jpg", amount: 5, category_id: 3, description: "The Nike Zoom Fly SP is designed to meet the demands of your toughest tempo runs, long runs and race days. Responsive construction turns the pressure of each stride into energy return for the next. This special edition of the racer updates the lightweight support system, while design details inspired by the historic Breaking2 attempt adorn the shoe."},
	{name: "Nike Revolution 4 FlyEase", price: "110.10", image: "images/shoes07.jpg", amount: 5, category_id: 3, description: "The Nike Revolution 4 FlyEase Men's Running Shoe adds support and comfort to your run with a lightweight, breathable upper. The FlyEase closure system connects a hook-and-loop strap to a wraparound zipper, letting you open or close the shoe—heel and all—in one fluid motion."},
	{name: "Nike Air Zoom Wildhorse 4", price: "250.22", image: "images/shoes08.jpg", amount: 5, category_id: 3, description: "Designed for trail running, the Nike Air Zoom Wildhorse 4 Men's Running Shoe features a protective plate that shields your feet from rough terrain and Flywire cables that wrap the arch of your foot for comfortable support."},
	{name: "Nike Zoom Streak 6 Unisex", price: "190.30", image: "images/shoes09.jpg", amount: 5, category_id: 4, description: "The Nike Zoom Streak 6 Unisex Racing Shoe features an anatomical design and traction pattern that optimizes forward motion."},
	{name: "Jordan Grind 2 Oklahoma", price: "403.88", image: "images/shoes10.jpg", amount: 5, category_id: 5, description: "The Jordan Grind 2 Oklahoma Men's Running Shoe matches lightweight support with excellent cushioning to help you push through your workout. A midfoot strap delivers a snug fit, while Lunarlon cushioning gives you a comfortable yet responsive ride."},
	{name: "Nike Air Zoom Pegasus 35", price: "120.36", image: "images/shoes01.jpg", amount: 10, category_id: 1, description: "The Nike Air Zoom Pegasus 35 Shield Water-Repellent gets remixed to conquer wet routes. A water-repellent upper combines with an outsole that gives optimal grip on wet surfaces – letting you run in confidence despite the weather."},
	{name: "Nike Odyssey React", price: "225.50", image: "images/shoes02.jpg", amount: 15, category_id: 1, description: "The Nike Epic React Flyknit Men's Running Shoe provides crazy comfort that lasts as long as you can run. Its Nike React foam cushioning is responsive yet lightweight, durable yet soft. This attraction of opposites creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too."},
	{name: "Nike Air Zoom Structure 22", price: "299.99", image: "images/shoes03.jpg", amount: 4, category_id: 2, description: "The Nike Air Zoom Structure 22 Shield Water-Repellent gets remixed to conquer wet routes. A water-repellent upper sits atop supportive cushioning, while the outsole provides optimal grip on wet surfaces."},
	{name: "Nike Free RN 2018", price: "300.99", image: "images/shoes04.jpg", amount: 24, category_id: 2, description: "The Nike Free RN 2018 has been updated to deliver an even more dynamic feel. Stretch material in the upper moves with your foot, while a flexible outsole pattern adjusts to your every step. It's a ride that gives support and cushioning just where you need it."},
	{name: "Nike VaporFly 4% Flyknit", price: "405.99", image: "images/shoes05.jpg", amount: 2, category_id: 2, description: "Nike's fastest, most efficient marathon shoe just keeps winning everything in sight, as Shalane Flanagan (New York), Galen Rupp (Chicago), Edna Kiplagat (Boston) and Eliud Kipchoge (London, Berlin, Breaking2), can attest. With its ultra-light, uber-responsive ZoomX foam and a carbon fiber plate that feels like it’s propelling you forward, the VaporFly 4% is ready to push you to victories both large and small."},
	{name: "Nike Zoom Fly SP", price: "180.10", image: "images/shoes06.jpg", amount: 5, category_id: 3, description: "The Nike Zoom Fly SP is designed to meet the demands of your toughest tempo runs, long runs and race days. Responsive construction turns the pressure of each stride into energy return for the next. This special edition of the racer updates the lightweight support system, while design details inspired by the historic Breaking2 attempt adorn the shoe."},
	{name: "Nike Revolution 4 FlyEase", price: "110.10", image: "images/shoes07.jpg", amount: 5, category_id: 3, description: "The Nike Revolution 4 FlyEase Men's Running Shoe adds support and comfort to your run with a lightweight, breathable upper. The FlyEase closure system connects a hook-and-loop strap to a wraparound zipper, letting you open or close the shoe—heel and all—in one fluid motion."},
	{name: "Nike Air Zoom Wildhorse 4", price: "250.22", image: "images/shoes08.jpg", amount: 5, category_id: 3, description: "Designed for trail running, the Nike Air Zoom Wildhorse 4 Men's Running Shoe features a protective plate that shields your feet from rough terrain and Flywire cables that wrap the arch of your foot for comfortable support."},
	{name: "Nike Zoom Streak 6 Unisex", price: "190.30", image: "images/shoes09.jpg", amount: 5, category_id: 4, description: "The Nike Zoom Streak 6 Unisex Racing Shoe features an anatomical design and traction pattern that optimizes forward motion."},
	{name: "Jordan Grind 2 Oklahoma", price: "403.88", image: "images/shoes10.jpg", amount: 5, category_id: 5, description: "The Jordan Grind 2 Oklahoma Men's Running Shoe matches lightweight support with excellent cushioning to help you push through your workout. A midfoot strap delivers a snug fit, while Lunarlon cushioning gives you a comfortable yet responsive ride."},
];

db.serialize(function () {
	db.run("DROP TABLE IF EXISTS products");
	db.run("CREATE TABLE products (" +
		"[id] integer PRIMARY KEY AUTOINCREMENT NOT NULL, " +
		"[name] varchar NOT NULL, " +
		"[description] text, " +
		"[price] float  NOT NULL, " +
		"[image] varchar," +
		"[amount] integer," +
		"[category_id] integer" +
		")");
	
	users.map((el) => db.run(
	    "INSERT INTO products(name,description,price,image,amount,category_id) VALUES(?,?,?,?,?,?)",
        [el.name, el.description, el.price, el.image, el.amount, el.category_id])
    );
	
});

// -----------------------

db.close((err) => {
    if(err){
        console.log(err.message);
    }
    console.log("DB connection was disabled");
});