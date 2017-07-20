# Running the API and frontend

In the `bookstore-api` directory, run:

- `bundle install`
- `bin/rails server --binding 0.0.0.0`

In the `bookstore` directory, run:

- `npm install`
- `ember server --proxy http://localhost:3000`

Then browse to `http://localhost:4200` to see the app!

# If data does not show

From `bookstore-api` run:

- `bin/rails db:migrate`
- `bin/rails db:seed`
