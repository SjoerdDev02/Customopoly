# Customopoly

Dit project biedt de mogelijkheid om het spel Monopoly volledig te ontwerpen met eigen straatnamen, afbeeldingen, kleuren, pionnen en meer.

## Technologieën
- Laravel
- React
- Intertia
- Axios
- React Context
- Styled Components

## Installatie Instructies
Volg onderstaande stappen om het project lokaal te installeren:

1. Download het project op je computer
2. Voer `npm install` in de terminal uit
3. Voer `composer install` in de terminal uit
4. Voer `cp .env.example .env` in de terminal uit
5. Vul je eigen gebruikersnaam en wachtwoord in bij de `USERNAME EN PASSWORD` in line 15 en 16 van .env
6. Voer `php artisan key:generate` in de terminal uit
7. Start `XAMPP, WAMP of MAMP` op
8. Stel de `MySQL port` in op `3306` en de root op folder genaamd `public` in dit project
9. Voer `php artisan migrate:fresh --seed` in de terminal uit
10. Voer `php artisan storage:link` in de terminal uit
11. Voer `php artisan serve` in de terminal uit
12. Voer `npm run dev` in een nieuwe terminal uit
13. Ga naar onderstaande url

Controleer de terminal waar je `php artisan serve` hebt uitgevoerd voor de port. Ik ga in dit voorbeeld uit van port 8000.
Url: [http://localhost:8000](http://localhost:8000)

Zorg dat je de bovenstaande stappen nauwkeurig volgt om het project lokaal te gebruiken. Voel je ook vrij om het project naar eigen wens aan te passen. Voor vragen of feedback kun je mij contacteren via [sjoerd.kessels2002@gmail.com](sjoerd.kessels2002@gmail.com).