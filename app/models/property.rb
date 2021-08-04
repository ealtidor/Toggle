class Property < ApplicationRecord
  belongs_to :user
  has_many :tenants

  accepts_nested_attributes_for :tenants
end
