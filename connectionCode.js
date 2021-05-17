class ConnectionCode
{

    static encode(ipAddress)
    {

        var encodedAddress = "";

        var splitIP = [];

        var activeString = "";

        for (var i = 0; i < ipAddress.length; i++)
        {

            if (i === ipAddress.length - 1)
            {

                activeString += ipAddress[i];

                splitIP.push(parseInt(activeString));

            }
            else if (ipAddress[i] === ".")
            {

                splitIP.push(parseInt(activeString));

                activeString = "";

            }
            else
            {

                activeString += ipAddress[i];

            }
            
        }

        for (var i = 0; i < 4; i++)
        {

            var num = splitIP[i].toString(16);

            if (num.length === 1)
            {

                num = "0" + num;

            }

            encodedAddress += num.toUpperCase();
            
        }

        return encodedAddress;

    }

    static decode(encodedAddress)
    {

        var decodedAddress = "";

        var splitCode = [];

        for (var i = 0; i < encodedAddress.length; i += 2)
        {

            splitCode.push(parseInt(encodedAddress[i] + encodedAddress[i + 1], 16));

        }

        for (var i = 0; i < 4; i++) {

            decodedAddress += splitCode[i].toString();

            if (i < 3) {

                decodedAddress += ".";

            }

        }

        return decodedAddress;

    }

}