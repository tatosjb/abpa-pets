json.extract! animal, :id, :code, :pet_type, :size, :fur, :color, :gender, :birthdate, :description
json.url animal_url(animal, format: :json)
