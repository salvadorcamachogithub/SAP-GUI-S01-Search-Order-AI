AIUtil.SetContext SAPGuiSession("micclass:=SAPGuiSession")

' Search T-Code
AIUtil("combobox", "").Type "/nva03" + vbCrLf
AIUtil("text_box", "Order:").Type "4040"
AIUtil("button", "Search").Click

' Text Validation
AIUtil.FindTextBlock("Standard Order:").CheckExists True

' Exit
AIUtil.FindTextBlock("Exit").Click
AIUtil.FindTextBlock("Exit").Click
AIUtil("button", "Yes").Click
