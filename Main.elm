module Main exposing (..)

import Html exposing (..)


-- Model


type alias Operator =
    { name : String
    , symbol : String
    }


initOperator : Operator
initOperator =
    { name = "Spaceship"
    , symbol = "<=>"
    }



-- Update


type Msg
    = Show


update : Msg -> Operator -> Operator
update msg operator =
    case msg of
        Show ->
            operator


view : Operator -> Html Msg
view operator =
    div [] [ text (toString operator) ]


main : Program Never Operator Msg
main =
    Html.beginnerProgram
        { model = initOperator
        , update = update
        , view = view
        }
