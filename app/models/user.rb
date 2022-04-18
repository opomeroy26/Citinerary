class User < ApplicationRecord
    has_many :activities
    has_many :locations, through: :activities 

    has_secure_password

    validates :username, presence:true, uniqueness:true 

end
