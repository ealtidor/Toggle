class CreateTenants < ActiveRecord::Migration[6.1]
  def change
    create_table :tenants do |t|
      t.string :name
      t.string :previous_address
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :email
      t.integer :primary_number
      t.integer :alt_number
      t.string :preferred_contact
      t.references :property, null: false, foreign_key: true

      t.timestamps
    end
  end
end
