class ActivityCategorySerializer < ActiveModel::Serializer
  attributes :id
  has_one :category
  has_one :activity
end
