module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Http
import Json.Decode as Decode


-- model


type alias Operator =
    { name : String
    , symbol : String
    }


type alias Operators =
    List Operator


type alias Model =
    { operators : Operators
    , currentOperator : Operator
    }


operator : Operator
operator =
    { name = "Spaceship"
    , symbol = "<=>"
    }


operators : List Operator
operators =
    [ operator, operator, operator, operator ]


model : Model
model =
    { operators = operators
    , currentOperator = operator
    }



-- msg


type Msg
    = Show


-- update

update : Msg -> Model -> Model
update msg model =
    case msg of
        Show ->
        Debug.log "sweet"
            getOperator
            operator
            model

-- functions


getOperator : Operator -> Model -> Model
getOperator operator model =
    model


-- view


view : Model -> Html Msg
view model =
    ul []
        (List.map (\l -> li [ onClick Show ] [ text l.name ]) model.operators)


main =
    beginnerProgram
        { model = model
        , update = update
        , view = view
        }
