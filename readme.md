# BookshelfJS API Demo
An express-generator'd & modified example of a BookshelfJS API for the purpose of demonstrating some of the features of BookshelfJS
in a tangible way.

## Technologies demonstrated ##
- ExpressJS
- BookshelfJS
- KnexJS
- Lodash

## BookshelfJS Features demonstrated ##
- One-to-One relations
- One-to-Many relations
- Belongs-to-One relations
- Belongs-to-Many relations
- Polymorphic relations

## KnexJS Features demonstrated ##
- CLI Migrations & Schema use
- CLI Seeds

## Setup ##
    npm install
    
    // create a postgres database called bookshelf-demo & update credentials in knexfile.js
    
    // build database tables and populate with test data
    knex migrate:latest
    knex seed:run
    
    // fire up a test server
    npm start
    
## Browse ##
[http://localhost:3000](http://localhost:3000)

# License ##

The Apache 2.0 License

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
