class Activity < ApplicationRecord
  belongs_to :user
  belongs_to :location
  has_many :activity_categories
  has_many :categories, through: :activity_categories



end
