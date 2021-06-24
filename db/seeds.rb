# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Property.destroy_all
Tenant.destroy_all

@user = User.create!(username: 'Loon', 
email: 'loon@gmail.com', 
password: '1234567')

puts "#{User.count} users created"

@properties = Property.create!([{
name: 'Property 1', 
rent: 1500, 
beds: 2, 
bath: 2, 
sq_ft: 1178, 
address: '123 LOON STREET, DECATUR, GA, 45678', 
current_tenant: 'Jane Doe', 
rental_agreement: '06/30/2020 to 12/30/2021', 
next_maintenance: '09/30/2021', 
amenities: 'Pool, Dog Park, Bike Trail, MARTA station',
img_url: 'https://images.unsplash.com/photo-1587094313669-faf7668ed8a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
user: @user}])

puts "#{Property.count} properties created"

@tenant = Tenant.create!(
name: 'Jane Doe', 
previous_address: '2556 NW 32ND COURT', 
city: 'FORT LAUDERDALE', 
state: 'FL', 
zip_code: '33309', 
email: 'JANE_DOE@GMAIL.COM', 
primary_number: '054-123-4567', 
alt_number: '754-678-4040', 
preferred_contact: 'email', 
property: @properties.first)

puts "#{Tenant.count} tenants created"

@properties.first.tenants = [@tenant]
