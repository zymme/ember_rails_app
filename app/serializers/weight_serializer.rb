class WeightSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :created_at, :updated_at
end
