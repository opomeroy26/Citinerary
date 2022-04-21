class Activity < ApplicationRecord
  belongs_to :user
  belongs_to :location
  # has_many :activity_categories, dependent: :destroy
  # has_many :categories, through: :activity_categories, dependent: :destroy

end
