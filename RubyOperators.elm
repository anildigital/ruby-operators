module RubyOperators exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Json.Encode exposing (string)
import Html.Attributes exposing (property)
import Http
import Json.Decode as Decode exposing (Decoder, field, decodeString)


operatorsUrl : String
operatorsUrl =
    "./operators.json"



-- model


type alias Operator =
    { name : String
    , symbol : String
    }


operators : List Operator
operators =
    []


type alias Model =
    { operators : List Operator
    , currentOperator : Maybe Operator
    }


initialModel : Model
initialModel =
    { operators = operators
    , currentOperator = List.head (operators)
    }


httpGet : (Result Http.Error (List Operator) -> msg) -> Cmd msg
httpGet msg =
    Decode.list operatorDecoder
        |> Http.get operatorsUrl
        |> Http.send msg


getOperators : Cmd Msg
getOperators =
    httpGet FillOperators



-- msg


type Msg
    = Show Operator
    | FillOperators (Result Http.Error (List Operator))



-- update


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Show operator ->
            ( { model | currentOperator = Maybe.Just operator }, Cmd.none )

        FillOperators (Ok allOperators) ->
            ( { model | operators = allOperators, currentOperator = List.head (allOperators) }, Cmd.none )

        FillOperators (Err error) ->
            ( model, Cmd.none )



-- view


viewOperatorLi : Operator -> Html Msg
viewOperatorLi operator =
    li [ class "", onClick (Show operator) ]
        [ span []
            [ text operator.name
            ]
        , span [ property "innerHTML" (string "&nbsp;") ]
            []
        , span [ class "operator_mini" ]
            [ text "=>" ]
        ]


viewSidebar : List Operator -> Html Msg
viewSidebar operators =
    div [ class "col-sm-3 col-md-3 sidebar" ]
        [ ul [ class "nav nav-sidebar" ]
            (List.map
                viewOperatorLi
                operators
            )
        ]


viewHeader : Html msg
viewHeader =
    h1 [ class "page-header" ]
        [ text "Ruby Operators" ]


viewOperator : Maybe Operator -> Html msg
viewOperator currentOperator =
    case currentOperator of
        Just operator ->
            div [ class "wrapper" ]
                [ div [ class "operator" ] [ (text operator.symbol) ]
                , div [ class "operator_name" ] [ (text operator.name) ]
                , div [] []
                ]

        Nothing ->
            div [] []


viewMain : Maybe Operator -> Html msg
viewMain currentOperator =
    div [ class "col-sm-9 col-sm-offset-3 col-md-9 col-md-offset-3 main" ]
        [ viewHeader
        , viewOperator currentOperator
        ]


view : Model -> Html Msg
view model =
    div [ id "container" ]
        [ div
            []
            [ div [ class "row" ]
                [ viewSidebar model.operators
                , viewMain model.currentOperator
                ]
            ]
        ]


operatorDecoder : Decoder Operator
operatorDecoder =
    Decode.map2 Operator
        (field "name" Decode.string)
        (field "symbol" Decode.string)


main =
    program
        { init = ( initialModel, getOperators )
        , view = view
        , update = update
        , subscriptions = (\_ -> Sub.none)
        }
