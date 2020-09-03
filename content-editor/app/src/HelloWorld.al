pageextension 50120 CustomerListExt extends "Customer List"
{
    layout
    {
        addbefore(Control1)
        {
            usercontrol("ContentEditor"; ContentEditor)
            {
                trigger OnContentChange(content: Text)
                begin

                end;
            }
        }
    }

    trigger OnOpenPage();
    begin
        // CurrPage.ContentEditor.LoadContent('');
    end;
}