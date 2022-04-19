# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Clearing old data..."

Activity.destroy_all
Location.destroy_all
User.destroy_all
Category.destroy_all
ActivityCategory.destroy_all


puts "🌱 Seeding Locations"

l1 = Location.create(city: "Denver")
l2 = Location.create(city: "San Francisco")
l3 = Location.create(city: "Seattle")
l4 = Location.create(city: "Los Angeles")
l5 = Location.create(city: "Austin")
l6 = Location.create(city: "New York City")
l7 = Location.create(city: "Chicago")
l8 = Location.create(city: "Houston")
l9 = Location.create(city: "Boulder")
l10 = Location.create(city: "New Orleans")
l11 = Location.create(city: "San Diego")
l12 = Location.create(city: "Phoenix")
l13 = Location.create(city: "Dallas")
l14 = Location.create(city: "Philadelphia")
l15 = Location.create(city: "Miami")
l16 = Location.create(city: "Atlanta")
l17 = Location.create(city: "Portland")
l18 = Location.create(city: "Boston")

puts "🌱 Seeding Categories"

c1 = Category.create(category_icon: "https://www.flaticon.com/premium-icon/landscape_3000665", name:"Outdoors")
c2 = Category.create(category_icon: "https://cdn-icons-png.flaticon.com/128/2107/2107845.png", name:"Date")
c3 = Category.create(category_icon: "https://cdn-icons-png.flaticon.com/128/747/747376.png", name:"Solo")
c4 = Category.create(category_icon: "https://cdn-icons-png.flaticon.com/128/1441/1441180.png", name:"Friend-Activity")
c5 = Category.create(category_icon: "https://cdn-icons-png.flaticon.com/128/1946/1946488.png", name:"Indoors")
c6 = Category.create(category_icon: "https://cdn-icons-png.flaticon.com/128/857/857681.png", name:"Food")


puts "🌱 Seeding User"

u1 = User.create(username:"Hannah", age: 28, profile_picture:"https://images.unsplash.com/photo-1645781893238-5b592576d187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8SnBnNktpZGwtSGt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", password:"password" )
u2 = User.create(username:"Olivia", age: 24, profile_picture:"https://images.pexels.com/photos/3687957/pexels-photo-3687957.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", password:"password" )

puts "🌱 Seeding Activities"

a1 = Activity.create(name: "Hiking", duration: 60, description: "Easy hiking trail", user_id: u1.id, location_id: l1.id)
a2 = Activity.create(name: "Movies", duration: 120, description: "New action movie", user_id: u2.id, location_id: l2.id)
a3 = Activity.create(name: "Shopping", duration: 120, description: "Shopping with friends", user_id: u1.id, location_id: l3.id)
a4 = Activity.create(name: "Dinner", duration: 60, description: "Mexican restaurant", user_id: u1.id, location_id: l4.id)
a5 = Activity.create(name: "MOMA", duration: 120, description: "Art Museum", user_id: u2.id, location_id: l5.id)
a6 = Activity.create(name: "Broadway", duration: 90, description: "See a live play!", user_id: u2.id, location_id: l6.id)
a7 = Activity.create(name: "The Bean", duration: 30, description: "See a Chicago landmark", user_id: u2.id, location_id: l7.id)
a8 = Activity.create(name: "Boat Ride", duration: 90, description: "Rent a paddle boat", user_id: u2.id, location_id: l8.id)
a9 = Activity.create(name: "Pearl Street", duration: 120, description: "Walk and shop at an outdoor mall", user_id: u2.id, location_id: l9.id)
a10 = Activity.create(name: "Haunted Tour", duration: 120, description: "Book a tour to see the most haunted spots in America", user_id: u2.id, location_id: l10.id)
a11 = Activity.create(name: "Sunset Cliffs", duration: 30, description: "Grab a burrito and enjoy the beautiful view", user_id: u2.id, location_id: l11.id)
a12 = Activity.create(name: "Hiking", duration: 60, description: "Numerous trails to choose from, ranging in difficulty", user_id: u2.id, location_id: l12.id)
a13 = Activity.create(name: "Paddle Board", duration: 120, description: "Spend the day on the water paddle boarding", user_id: u2.id, location_id: l13.id)
a14 = Activity.create(name: "Eat Cheesesteaks", duration: 60, description: "Try some famouse Philly cheesesteaks", user_id: u2.id, location_id: l14.id)
a15 = Activity.create(name: "Beach Day", duration: 120, description: "Spend the day relaxing on the beach", user_id: u2.id, location_id: l15.id)
a16 = Activity.create(name: "Braves game", duration: 120, description: "Go to a baseball game", user_id: u2.id, location_id: l16.id)
a17 = Activity.create(name: "Coffee house crawl", duration: 90, description: "Try various different coffee shops", user_id: u2.id, location_id: l17.id)
a18 = Activity.create(name: "Walk along the water", duration: 90, description: "Go for a relaxing walk along the water", user_id: u2.id, location_id: l18.id)
a19 = Activity.create(name: "Meow Wolf", duration: 120, description: "Go see Denver's new art experience", user_id: u2.id, location_id: l1.id)
a20 = Activity.create(name: "Golden Gate Bridge", duration: 30, description: "Drive accross the golden gate bridge", user_id: u2.id, location_id: l2.id)
a21 = Activity.create(name: "Space Needle", duration: 60, description: "Go view the Seattle Space Needle", user_id: u2.id, location_id: l3.id)


puts "🌱 Seeding Activity_Category"

ActivityCategory.create(category_id: c1.id , activity_id: a1.id)
ActivityCategory.create(category_id: c2.id , activity_id: a4.id)
ActivityCategory.create(category_id: c3.id, activity_id: a1.id)
ActivityCategory.create(category_id: c4.id , activity_id: a3.id)
ActivityCategory.create(category_id: c5.id , activity_id: a3.id)
ActivityCategory.create(category_id: c6.id , activity_id: a4.id)
ActivityCategory.create(category_id: c5.id , activity_id: a2.id)
ActivityCategory.create(category_id: c1.id , activity_id: a5.id)
ActivityCategory.create(category_id: c2.id , activity_id: a5.id)
ActivityCategory.create(category_id: c5.id , activity_id: a6.id)
ActivityCategory.create(category_id: c1.id , activity_id: a7.id)
ActivityCategory.create(category_id: c1.id , activity_id: a8.id)
ActivityCategory.create(category_id: c1.id , activity_id: a9.id)
ActivityCategory.create(category_id: c1.id , activity_id: a10.id)
ActivityCategory.create(category_id: c1.id , activity_id: a11.id)
ActivityCategory.create(category_id: c4.id , activity_id: a12.id)
ActivityCategory.create(category_id: c1.id , activity_id: a12.id)
ActivityCategory.create(category_id: c1.id , activity_id: a13.id)
ActivityCategory.create(category_id: c6.id , activity_id: a14.id)
ActivityCategory.create(category_id: c1.id , activity_id: a15.id)
ActivityCategory.create(category_id: c1.id , activity_id: a16.id)
ActivityCategory.create(category_id: c4.id , activity_id: a16.id)
ActivityCategory.create(category_id: c6.id , activity_id: a17.id)
ActivityCategory.create(category_id: c1.id , activity_id: a18.id)
ActivityCategory.create(category_id: c5.id , activity_id: a19.id)
ActivityCategory.create(category_id: c2.id , activity_id: a20.id)
ActivityCategory.create(category_id: c4.id , activity_id: a21.id)


