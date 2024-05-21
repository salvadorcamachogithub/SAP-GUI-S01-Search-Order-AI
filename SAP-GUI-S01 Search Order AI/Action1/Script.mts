' Context
AIUtil.SetContext SAPGuiSession("micclass:=SAPGuiSession")

' Credentials
AIUtil("text_box", "User: *").Type "S4H_SD_DEM"
AIUtil("text_box", "Password").Type "Welcome1" + vbCrLf

' Search T-Code
AIUtil("combobox", "").Type "/nva03" + vbCrLf
AIUtil("text_box", "Order:").Type "4040"
AIUtil("button", "Continue").Click

' Text Validation
AIUtil.FindTextBlock("Delivery Block:").CheckExists True

' Exit
AIUtil.FindTextBlock("Exit").Click
AIUtil.FindTextBlock("Exit").Click
AIUtil("button", "Yes").Click

