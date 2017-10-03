module RubyOperators exposing (..)

import Html exposing (Html, div, pre, code, program, li, span, text, ul, h1)
import Html.Events exposing (onClick)
import Html.Attributes exposing (property, id, class)
import Http
import Json.Encode exposing (string)
import Json.Decode exposing (Decoder, list)
import Json.Decode.Pipeline exposing (decode, required, optional)
import Highlight exposing (check, processedOutput)


operatorsUrl : String
operatorsUrl =
    "./operators.json"



-- model


type alias Operator =
    { name : String
    , symbol : String
    , example : String
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
    Json.Decode.list operatorDecoder
        |> Http.get operatorsUrl
        |> Http.send msg


getOperators : Cmd Msg
getOperators =
    httpGet RenderOperators



-- msg


type Msg
    = Show Operator
    | RenderOperators (Result Http.Error (List Operator))
    | RenderCodeExample String



-- update


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Show operator ->
            ( { model | currentOperator = Just operator }, check operator.example )

        RenderOperators (Ok allOperators) ->
            ( { model | operators = allOperators, currentOperator = List.head (allOperators) }, Cmd.none )

        RenderOperators (Err error) ->
            ( model, Cmd.none )

        RenderCodeExample highlightedCodeExample ->
            ( { model | currentOperator = Maybe.map (\operator -> { operator | example = highlightedCodeExample }) model.currentOperator }, Cmd.none )



-- view


viewOperatorLi : Operator -> Html Msg
viewOperatorLi operator =
    li [ class "", onClick (Show operator) ]
        [ span []
            [ text operator.name
            ]
        , span [ property "innerHTML" (Json.Encode.string "&nbsp;") ]
            []
        , span [ class "operator_mini" ]
            [ text operator.symbol ]
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


viewCodeExample : String -> Html msg
viewCodeExample example =
    if (String.isEmpty example == False) then
        pre []
            [ code
                [ property "innerHTML" (Json.Encode.string example) ]
                []
            ]
    else
        span [] []


viewOperator : Maybe Operator -> Html msg
viewOperator currentOperator =
    case currentOperator of
        Just operator ->
            div [ class "wrapper" ]
                [ div [ class "operator" ] [ (text operator.symbol) ]
                , div [ class "operator_name" ] [ (text operator.name) ]
                , viewCodeExample operator.example
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
    decode Operator
        |> required "name" Json.Decode.string
        |> required "symbol" Json.Decode.string
        |> optional "example" Json.Decode.string ""


subscriptions : Model -> Sub Msg
subscriptions model =
    processedOutput RenderCodeExample


main : Program Never Model Msg
main =
    program
        { init = ( initialModel, getOperators )
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
