# Sign In:
    http://74.207.230.214/api/v1/login
- INPUT:
{
"email": "jfabiantorres2019@gmail.com",
"password": "jfabiant"
}
- OUTPUT:
{
  "codRes": "01",
  "error": "Unauthorized"
}

# Sign Up:
    http://74.207.230.214/api/v1/register
- INPUT:
{
"email": "jfabiantorres2019@gmail.com",
"password": "jfabiant",
"name": "John Fabian",
"last_name": "Timoteo Torres",
"phone": 995958375,
"address": "Av. Sta. Anita",
"talla": 1.70,
"peso": 100
}

# Doctors
  http://74.207.230.214/api/v1/doctors
- INPUT
{
	"name": "John Fabian",
	"last_name": "Timoteo Torres",
	"email": "john@gmail.com",
	"phone": 999888777,
	"facebook": "jfabiant",
	"linkedin": "jfabiant",
	"description": "I'm the doctor",
	"tuition": 123,
	"outstanding": 1,
	"speciality_id": 1
}