tableextension 50100 "Customer Detail" extends Customer
{
    fields
    {
        field(50000; Detail; Blob)
        {
            DataClassification = CustomerContent;
        }

        field(50001; Twitter; Blob)
        {
            DataClassification = CustomerContent;
        }
    }
}