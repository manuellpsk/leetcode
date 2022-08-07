def isValid(s: str):
    hashSymbol = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    to_verify = []
    for i in range(len(s)):
        char = s[i]
        if char in "({[":
            to_verify.append(char)
        else:
            if not(to_verify and hashSymbol.get(to_verify.pop()) == char):
                return False
    return len(to_verify) == 0


print(isValid("[())]"))
