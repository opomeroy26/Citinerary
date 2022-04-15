class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :profile_picture, :password_digest
end
