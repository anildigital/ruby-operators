port module Highlight exposing (check, processedOutput)


port check : String -> Cmd msg


port processedOutput : (String -> msg) -> Sub msg
