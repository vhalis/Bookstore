class PublishingHouseSerializer < ActiveModel::Serializer
    attributes :id, :name
    has_many :published
end
