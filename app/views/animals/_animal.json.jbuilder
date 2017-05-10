json.extract! animal, :id, :code, :pet_type, :size, :fur, :color, :gender, :birthdate, :description, :created_at, :updated_at
json.url animal_url(animal, format: :json)
