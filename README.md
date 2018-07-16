# Voucha-Api

Voucha is a platform that leverages facebook technologies to empower connection between local vendors and their online/offline customers. This will be it's Api 🛍

`Voucha` helps customers know which business has the best **vouchers**, **discounts**, **coupons**, and **promos** in their neighborhood.

`Voucha` helps local businesses advertize their new products and turn customers into friends .

## Mobile Api 🏎

Voucha has an android and ios mobile app which will be consuming this Api.

Below is how to set up and run the application:

## Development set up

- Check that python 3, pip, virtualenv and postgress are installed

- Clone the Voucha-Api repo and switch into it
    ```
    git clone https://github.com/j33n/Voucha-Api.git && cd Voucha-Api
    ```
- Create virtual env

    ```
    virtualenv --python=python3 venv
    ```
    
- Activate virtual env

    ```
    source venv/bin/activate
    ```
    
- Install dependencies

    ```
    pip install -r requirements.txt
    ```
    
- Create Application environment variables and save them in .env file

    ```
    export APP_SETTINGS="development" # set app Enviroment.
    export SECRET_KEY="some-very-long-string-of-random-characters"
    export DEV_DATABASE_URL="" # Db for Development.
    export TEST_DATABASE_URL="" # Db for Testing
    export DATABASE_URL="" # Db for Production
    ```
    
- Running migrations

    - Initial migration commands
    
        ```
        $ alembic revision --autogenerate -m "Migration message"

        $ alembic upgrade head
        ```
        
    - If you have one migration file in the alembic/version folder. Run the commands below:
    
        ```
        $ alembic stamp head

        $ alembic upgrade head
        ```
        
    - If you have more than 2 migration files in the alembic/versions folder. Run the commands bellow
    
        ```
        $ alembic stamp head

        $ alembic upgrade head

        $ alembic revision --autogenerate -m "Migration message"
        
        $ alembic upgrade head
        ```
        
- Run application.

    ```
    python manage.py runserver
    ```
    
- Running Tests

 - To run tests and observe test coverage for various versions of python . Run the command below.
 
 ```
 tox
 ```
 
 - To run  and check for test coverage. Run the command below:
 
 ```
 coverage run -m pytest
 ```
 
 - To obtain coverage report. Run the command below:

 ```
 coverage report
 ```
 - To obtain html browser report. Run command below:
 ```
 coverage html
 ```
 ```
 A folder titled html_coverage_report will be generated. Open it and copy the path  of index.html and paste it in your browser.
 ```

## Built with
- Python version 3
- Flask
- Grapghql
- Postgres

## Contribution guide
##### Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method.
Then the owners of this repository will guide you on how to proceed.

## Authors

- [Jean Abayo](https://twitter.com/JeanAbayo)
- [Emery Muhozi](https://twitter.com/EmeryMuhozi)

