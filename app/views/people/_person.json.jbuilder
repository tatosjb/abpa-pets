json.extract! person, :id, :name, :rg, :cpf, :occupation, :company, :address, :neighborhood, :referece_point, :created_at, :updated_at
json.url person_url(person, format: :json)
