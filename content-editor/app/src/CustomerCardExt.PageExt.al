pageextension 50120 CustomerCardExt extends "Customer Card"
{
    layout
    {
        addafter(General)
        {
            group(About)
            {
                Caption = 'About';

                usercontrol("ContentEditor"; ContentEditor)
                {
                    trigger OnContentChange(Content: JsonObject)
                    var
                        ContentText: Text;
                        OStream: OutStream;
                    begin
                        Detail.CreateOutStream(OStream, TextEncoding::UTF8);
                        Content.WriteTo(OStream);
                        Modify();
                    end;
                }
            }
            group(Twitter)
            {
                Caption = 'Twitter';

                usercontrol("Twitter ContentEditor"; ContentEditor)
                {
                    trigger OnContentChange(Content: JsonObject)
                    var
                        ContentText: Text;
                        OStream: OutStream;
                    begin
                        Twitter.CreateOutStream(OStream, TextEncoding::UTF8);
                        Content.WriteTo(OStream);
                        Modify();
                    end;
                }
            }
        }
    }

    trigger OnAfterGetCurrRecord()
    begin
        LoadAbout();
        LoadTwitter();
    end;

    local procedure LoadAbout()
    var
        JObject: JsonObject;
        IStream: InStream;
    begin
        CalcFields(Detail);
        if Detail.HasValue() then begin
            Detail.CreateInStream(IStream, TextEncoding::UTF8);
            JObject.ReadFrom(IStream);
        end;

        CurrPage.ContentEditor.LoadContent(JObject);
    end;

    local procedure LoadTwitter()
    var
        JObject: JsonObject;
        IStream: InStream;
    begin
        CalcFields(Twitter);
        if Twitter.HasValue() then begin
            Twitter.CreateInStream(IStream, TextEncoding::UTF8);
            JObject.ReadFrom(IStream);
        end;

        CurrPage."Twitter ContentEditor".LoadContent(JObject);
    end;
}