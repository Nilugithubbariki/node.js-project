node vs express -- Node is the main thing express ke code se hum server ka code likh pate and server kaisa react karega wo bhi express ke help se likhte hai
What is express js -- package,routing
Why express js -- http is diffeicult to use, express makes this easier
Routing -- Routes banaane ke process ko hum kahte hai routing.
/profile
/home
/contact
/profile/nilu/jldskjgoidslieljg/jfojdsoijlsdjiljdoi
Middleware
Request and Response and Next --: Request mein saara data hota hai aane waale user ki reqest ki taraf ka, jaise ki uski location, device info and other things, res mein controls hote hai jinke basis pe hum server se response bhej paate hai. Next is just a push so that our request moves to the next thing which should be executed.

Route Parameters --: To make any route dynamic you can use : at the place where you want to make it dynamci, and to access there value use (req.params.username)
Template engines --: Ye ek style of markup se convert karke aapko html dete he.
ejs is very similar to HTML
Static files --: images , stylesheets , frontend js ste up
set up :--
create three folders inside it,images, stylesheets,javascripts
configure the express static in script.js
understand teh path

HTTP methods - get post
Error handling

middleware ek aisa function hota hai jo har route se pahle chalta hai, iska matlab saaare routes main koi bhi chale usse pahle middleware chalta hai and usmein likha code pahle exucute hota hai.

node ke saath ek dikkat hai ki agar control ek baar bhi kisi middleware par gaya to contol khud se agle route/middleware par nahi jaayega,use agle par lejaane ke liye aako push karna padega aur ye push kahlaayega next ko chalaana.

ejs setup karne ke liye /HTML

1 : ejs install
npm i ejs

2: configure ejs

app.set("view engine","ejs");
//codepen domo contact page modern design html css
3: ek views folder banao

4: usmein ejs files banao

5: Send ke jagah render karo
