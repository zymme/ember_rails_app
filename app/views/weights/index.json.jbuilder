json.array!(@weights) do |weight|
  json.extract! weight, :id, :name, :weight
  json.url weight_url(weight, format: :json)
end
