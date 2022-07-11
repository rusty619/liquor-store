class BrandSerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :country_img, :img, :description, :website
end
