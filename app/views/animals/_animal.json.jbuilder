json.id animal.id
json.code animal.code
json.pet_type I18n.t(animal.pet_type, scope: 'activerecord.attributes.animal.pet_type_list')
json.size I18n.t(animal.size, scope: 'activerecord.attributes.animal.size_list')
json.fur I18n.t(animal.fur, scope: 'activerecord.attributes.animal.fur_list')
json.color I18n.t(animal.color, scope: 'activerecord.attributes.animal.color_list')
json.gender I18n.t(animal.gender, scope: 'activerecord.attributes.animal.gender_list')
json.birthdate I18n.l animal.birthdate
json.description animal.description
