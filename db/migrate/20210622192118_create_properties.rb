class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :name
      t.integer :rent
      t.integer :beds
      t.integer :bath
      t.integer :sq_ft
      t.string :address
      t.string :current_tenant
      t.string :rental_agreement
      t.string :next_maintenance
      t.string :amenities
      t.string :img_url

      t.timestamps
    end
  end
end
