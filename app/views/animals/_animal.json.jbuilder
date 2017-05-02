json.extract! animal, :id, :type, :size, :fur, :color, :gender, :birthdate, :description, :created_at, :updated_at
json.url animal_url(animal, format: :json)
