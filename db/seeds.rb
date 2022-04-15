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

10.times do
    Location.create(city: Faker::Address.city) 
end

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

a1 = Activity.create(name: "Hiking", duration: 60, description: "Easy hiking trail", user_id: u1.id, location_id: Location.first.id)
a2 = Activity.create(name: "Movies", duration: 120, description: "New action movie", user_id: u2.id, location_id: Location.second.id)
a3 = Activity.create(name: "Shopping", duration: 120, description: "Shopping with friends", user_id: u1.id, location_id: Location.third.id)
a4 = Activity.create(name: "Dinner", duration: 60, description: "Mexican restaurant", user_id: u1.id, location_id: Location.fourth.id)
a5 = Activity.create(name: "Picnic", duration: 140, description: "Picnic in the park", user_id: u2.id, location_id: Location.fifth.id)


puts "🌱 Seeding Activity_Category"

ActivityCategory.create(category_id: c1.id , activity_id: a1.id)
ActivityCategory.create(category_id: c2.id , activity_id: a4.id)
ActivityCategory.create(category_id: c3.id, activity_id: a1.id)
ActivityCategory.create(category_id: c4.id , activity_id: a3.id)
ActivityCategory.create(category_id: c5.id , activity_id: a3.id)
ActivityCategory.create(category_id: c6.id , activity_id: a4.id)
ActivityCategory.create(category_id: c5.id , activity_id: a2.id)
ActivityCategory.create(category_id: c1.id , activity_id: a5.id)
ActivityCategory.create(category_id: c6.id , activity_id: a5.id)


