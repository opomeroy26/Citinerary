class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :duration, :description, :like, :category_icon, :category_name
  has_one :user
  has_one :location
  # has_many :categories
  
end
