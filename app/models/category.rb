class Category < ApplicationRecord
    has_many :activity_categories 
    has_many :activities, through: :activity_categories
end
