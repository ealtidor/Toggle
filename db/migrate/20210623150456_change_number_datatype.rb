class ChangeNumberDatatype < ActiveRecord::Migration[6.1]
  def change
    change_column(:tenants, :primary_number, :string)
    change_column(:tenants, :alt_number, :string)
  end
end
