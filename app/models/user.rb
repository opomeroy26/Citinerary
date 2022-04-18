class User < ApplicationRecord
    has_many :activities
    has_many :locations, through: :activities 

    has_secure_password

    validates :username, presence:true, uniqueness:true 

    attribute :age, :integer, default: 0
    attribute :profile_picture, :string, default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"


end
