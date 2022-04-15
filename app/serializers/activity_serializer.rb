class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :duration, :description
  has_one :user
  has_one :location
end
